import { useState } from 'react';

export default function Home() {
  const [chatMessages, setChatMessages] = useState([]);
  const [chatInput, setChatInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [fitAssessmentInput, setFitAssessmentInput] = useState('');
  const [fitResult, setFitResult] = useState(null);
  const [expandedSections, setExpandedSections] = useState({});

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const systemPrompt = `You are an AI assistant representing Shandin Harper, a UX/Product Design Leader with extensive experience spanning enterprise, consumer, mobile, e-learning, and game design.

IMPORTANT: When discussing experience, emphasize RELEVANCE and ADAPTABILITY over tenure. Focus on breadth of skills and current capabilities.

CURRENT ROLE:
- Expeditors (2015-Present, 9+ years): Enterprise UX, design systems, high-data applications, mentorship

LEADERSHIP & STRATEGIC WORK:
- Affordable Housing Nonprofit Board Chair (2020-Present): Digital transformation, 65% donation increase, 2× capacity expansion

KEY STRENGTHS:
- Hand-codes prototypes (HTML/CSS/Angular) - bridges design/dev gap
- Design systems expertise (built enterprise-wide patterns)
- Board-level leadership and business acumen
- Full-stack capability (design, build, deploy, measure)
- Accessibility champion (WCAG compliance as core principle)

COMMUNICATION STYLE:
- Thoughtful and strategic with concrete examples
- Frame experience as breadth and versatility, not tenure
- AVOID phrases like "I've been doing this for X years"
- Instead say "I have experience across..."

Answer questions conversationally and professionally. Keep responses 2-3 paragraphs unless depth is requested.`;

  const handleChatSubmit = async (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userMessage = { role: 'user', content: chatInput };
    setChatMessages(prev => [...prev, userMessage]);
    setChatInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          systemPrompt: systemPrompt,
          messages: [...chatMessages, userMessage]
        })
      });

      const data = await response.json();
      
      if (data.content && data.content[0]) {
        setChatMessages(prev => [...prev, { 
          role: 'assistant', 
          content: data.content[0].text 
        }]);
      }
    } catch (error) {
      console.error('Error:', error);
      setChatMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Sorry, I encountered an error. Please try again.' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFitAssessment = async () => {
    if (!fitAssessmentInput.trim()) return;
    setIsLoading(true);

    const fitSystemPrompt = `You are analyzing job fit for Shandin Harper, a UX Designer with extensive diverse experience.

STRENGTHS: Enterprise UX, design systems, developer collaboration, board-level leadership, business acumen

Analyze the job description and assess: Strong/Moderate/Weak Fit with specific reasoning.`;

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          systemPrompt: fitSystemPrompt,
          messages: [{
            role: 'user',
            content: `Please analyze this job description for fit:\n\n${fitAssessmentInput}`
          }]
        })
      });

      const data = await response.json();
      setFitResult(data.content[0].text);
    } catch (error) {
      setFitResult('Error analyzing fit. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const experiences = [
    {
      id: 'expeditors',
      company: 'Expeditors',
      title: 'UX Designer',
      duration: 'Apr 2015 – Present (9+ years)',
      industry: 'Global Logistics Service',
      summary: [
        'Lead UX initiatives for internal high-data web applications serving global operations',
        'Created enterprise-wide design system and pattern libraries',
        'Mentor junior UX designers and evangelize UX principles',
        'Conduct user research, usability testing, and deliver full UX lifecycle'
      ],
      deepContext: {
        situation: "Joined Expeditors when their internal tools were a patchwork of inconsistent interfaces built over decades. Each regional team had different patterns, no unified design language, and developers were making UX decisions by default.",
        approach: "Started by conducting an audit of existing patterns and interviewing power users across different regions. Built a case for design systems by showing the cost of inconsistency. Created a grassroots coalition of developers who wanted better patterns.",
        keyDecisions: [
          "Chose to hand-code the component library in Angular rather than use a design tool - this earned developer trust and ensured design intent was preserved",
          "Prioritized data-dense interfaces over aesthetics - our users needed efficiency, not beauty",
          "Built the design system iteratively rather than big-bang - each component had to prove its worth in production"
        ],
        impact: "The design system now powers 40+ internal applications. Reduced development time for new features by ~30%. Created a shared language between design and development that didn't exist before.",
        lessonsLearned: "Design systems in enterprise environments are more about people than pixels. The technical artifact is less important than the relationships and processes you build around it."
      }
    },
    {
      id: 'nonprofit',
      company: 'Affordable Housing Nonprofit',
      title: 'Board Chair & UX/Digital Strategy Lead',
      duration: '2020 – Present',
      industry: 'Nonprofit / Social Impact',
      summary: [
        'Led digital transformation: rebuilt donation platform with Stripe integration, WCAG-compliant UX, SEO optimization—increasing online donations 65%',
        'Expanded organizational housing capacity 2× across three states while maintaining 100% occupancy',
        'Launched AI-driven YouTube/TikTok content strategy projected to generate $24K-$174K annual revenue',
        'Guided property acquisition and rehabilitation strategy'
      ],
      deepContext: {
        situation: "The foundation relied heavily on in-person fundraising events and had virtually no online donation infrastructure. The website was outdated, not accessible, and didn't inspire donor confidence.",
        approach: "Applied UX thinking to the donor journey—from discovery to first gift to recurring giving. Rebuilt the website as a trust-building tool with accessibility at its core. Developed a diversified revenue strategy.",
        keyDecisions: [
          "Chose Stripe for payment processing despite higher fees—the UX and trust signals were worth it for donor conversion",
          "Implemented WCAG 2.1 AA compliance from day one, not as an afterthought",
          "Built the website myself rather than hiring an agency—maintained full control over UX decisions",
          "Diversified revenue beyond grants and events by launching AI-assisted content creation"
        ],
        impact: "Online donations increased 65% within the first year. Housing capacity doubled across three states. The YouTube/TikTok content strategy is on track to generate $24K-$174K annually.",
        lessonsLearned: "UX principles apply far beyond software—the donor journey is a user experience problem. Board-level leadership requires balancing stakeholder needs similar to enterprise stakeholder management."
      }
    },
    {
      id: 'premera',
      company: 'Premera Blue Cross',
      title: 'UX Designer',
      duration: 'Jun 2012 – Apr 2015',
      industry: 'Healthcare',
      summary: [
        'Collaborated with senior executives and developers on responsive healthcare applications',
        'Created wireframes, specifications, and conducted user testing',
        'Implemented designs with jQuery and Bootstrap'
      ],
      deepContext: {
        situation: "Healthcare industry was transitioning to responsive design and mobile-first thinking. Premera's member portal was desktop-only and struggling to serve an increasingly mobile user base.",
        approach: "Worked directly with compliance teams to understand constraints upfront rather than discovering them later. Partnered closely with developers to understand technical limitations.",
        keyDecisions: [
          "Chose progressive enhancement over mobile-first - our user base was still predominantly desktop",
          "Implemented designs myself in jQuery/Bootstrap to ensure they actually worked across browsers",
          "Prioritized accessibility from day one rather than retrofitting later"
        ],
        impact: "Successfully launched responsive member portal that maintained compliance while improving mobile experience.",
        lessonsLearned: "Constraints (compliance, accessibility, legacy systems) aren't obstacles—they're design requirements. Working within them makes you a better designer."
      }
    },
    {
      id: 'tmobile',
      company: 'T-Mobile',
      title: 'User Interface Designer',
      duration: 'Oct 2011 – Jun 2012',
      industry: 'Telecommunications',
      summary: [
        'Led visual design for mobile and desktop applications',
        'Delivered UI assets for iOS, Android, and Windows apps'
      ],
      deepContext: {
        situation: "T-Mobile was building cross-platform applications during the early smartphone era when iOS, Android, and Windows Phone all had different design languages.",
        approach: "Created a design system that had platform-specific implementations but shared core principles.",
        keyDecisions: [
          "Chose to respect platform conventions rather than force brand consistency everywhere",
          "Created separate asset libraries for each platform",
          "Focused on interaction patterns and information architecture as the unifying elements"
        ],
        impact: "Successfully launched apps that felt native to each platform while maintaining T-Mobile's brand identity.",
        lessonsLearned: "Sometimes consistency is knowing when NOT to be consistent. Platform conventions exist for good reasons."
      }
    }
  ];

  const skills = {
    strong: [
      'Enterprise UX & Complex Workflows',
      'Design Systems & Scalable Patterns',
      'Developer Collaboration (Hand-codes Prototypes)',
      'User Research & Usability Testing',
      'Executive Leadership & Board-Level Strategy',
      'Accessibility & WCAG Compliance',
      'Cross-functional Collaboration',
      'Mentorship & UX Evangelism',
      'High-Data Interface Design',
      'Business Metrics & Revenue Impact'
    ],
    moderate: [
      'Consumer Mobile Apps',
      'Rapid Prototyping Tools (Figma/Sketch)',
      'Marketing/Growth Design',
      'E-commerce & Conversion Optimization',
      'Content Strategy & SEO'
    ],
    gaps: [
      'Game UX Design',
      'VR/AR Interfaces',
      'Pure Visual/Brand Design',
      'Junior IC Roles (Leadership Experience)'
    ]
  };

  return (
    <div style={{
      backgroundColor: '#0a0a0a',
      color: '#e0e0e0',
      minHeight: '100vh',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      padding: '0'
    }}>
      {/* Header */}
      <header style={{
        borderBottom: '1px solid #333',
        padding: '60px 40px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{ marginBottom: '12px', color: '#888', fontSize: '14px', letterSpacing: '1px' }}>
          FEDERAL WAY, WA | SHANDIN@HOTMAIL.COM
        </div>
        <h1 style={{
          fontSize: '56px',
          fontWeight: '300',
          margin: '0 0 8px 0',
          letterSpacing: '-1px'
        }}>
          Shandin Harper
        </h1>
        <div style={{
          fontSize: '20px',
          color: '#10b981',
          marginBottom: '12px',
          fontWeight: '400'
        }}>
          Senior UX Designer
        </div>
        <div style={{
          fontSize: '16px',
          color: '#888',
          marginBottom: '40px',
          maxWidth: '700px',
          lineHeight: '1.6'
        }}>
          Expert in design systems, complex workflows, and bridging design-to-development. 
          Experienced across enterprise, consumer, and mobile platforms.
        </div>
        
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <button
            onClick={() => scrollToSection('chat')}
            style={{
              backgroundColor: '#10b981',
              color: '#0a0a0a',
              padding: '14px 28px',
              borderRadius: '6px',
              border: 'none',
              fontWeight: '600',
              fontSize: '15px',
              cursor: 'pointer'
            }}
          >
            💬 Ask AI About My Approach
          </button>
          <button
            onClick={() => scrollToSection('fit')}
            style={{
              backgroundColor: 'transparent',
              color: '#10b981',
              padding: '14px 28px',
              borderRadius: '6px',
              border: '2px solid #10b981',
              fontWeight: '600',
              fontSize: '15px',
              cursor: 'pointer'
            }}
          >
            Assess Role Fit
          </button>
        </div>
      </header>

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px' }}>
        {/* AI Chat Section */}
        <section id="chat" style={{
          backgroundColor: '#111',
          borderRadius: '12px',
          padding: '40px',
          marginBottom: '60px',
          border: '1px solid #222'
        }}>
          <h2 style={{ fontSize: '32px', fontWeight: '300', marginBottom: '12px' }}>
            Ask AI About My UX Approach
          </h2>
          <p style={{ color: '#888', marginBottom: '32px', fontSize: '15px' }}>
            Have questions about my experience, process, or approach? This AI assistant is trained on my 
            full background. Ask it to assess role fit, explain how I approach design problems, or discuss 
            how my experience transfers across different domains.
          </p>

          <div style={{
            backgroundColor: '#0a0a0a',
            borderRadius: '8px',
            padding: '24px',
            marginBottom: '20px',
            minHeight: '300px',
            maxHeight: '500px',
            overflowY: 'auto',
            border: '1px solid #222'
          }}>
            {chatMessages.length === 0 ? (
              <div style={{ color: '#555', fontStyle: 'italic' }}>
                Start a conversation... Try: "How do you approach design systems?" or "Tell me about your mentorship style"
              </div>
            ) : (
              chatMessages.map((msg, idx) => (
                <div key={idx} style={{
                  marginBottom: '20px',
                  padding: '16px',
                  backgroundColor: msg.role === 'user' ? '#1a3a2a' : '#1a1a1a',
                  borderRadius: '8px',
                  borderLeft: `3px solid ${msg.role === 'user' ? '#10b981' : '#555'}`
                }}>
                  <div style={{
                    fontSize: '12px',
                    color: '#888',
                    marginBottom: '8px',
                    fontWeight: '600',
                    textTransform: 'uppercase'
                  }}>
                    {msg.role === 'user' ? 'You' : 'AI Assistant'}
                  </div>
                  <div style={{ whiteSpace: 'pre-wrap', lineHeight: '1.6' }}>
                    {msg.content}
                  </div>
                </div>
              ))
            )}
            {isLoading && (
              <div style={{ color: '#888', fontStyle: 'italic' }}>Thinking...</div>
            )}
          </div>

          <form onSubmit={handleChatSubmit} style={{ display: 'flex', gap: '12px' }}>
            <input
              type="text"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              placeholder="Ask a question..."
              disabled={isLoading}
              style={{
                flex: 1,
                backgroundColor: '#1a1a1a',
                border: '1px solid #333',
                borderRadius: '6px',
                padding: '14px 18px',
                color: '#e0e0e0',
                fontSize: '15px',
                outline: 'none'
              }}
            />
            <button
              type="submit"
              disabled={isLoading || !chatInput.trim()}
              style={{
                backgroundColor: '#10b981',
                color: '#0a0a0a',
                border: 'none',
                borderRadius: '6px',
                padding: '14px 28px',
                fontWeight: '600',
                fontSize: '15px',
                cursor: isLoading ? 'not-allowed' : 'pointer',
                opacity: isLoading ? 0.5 : 1
              }}
            >
              Send
            </button>
          </form>
        </section>

        {/* Experience Section */}
        <section style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '300', marginBottom: '32px' }}>
            Experience
          </h2>

          {experiences.map((exp) => (
            <div key={exp.id} style={{
              backgroundColor: '#111',
              borderRadius: '12px',
              padding: '32px',
              marginBottom: '24px',
              border: '1px solid #222'
            }}>
              <div style={{ marginBottom: '20px' }}>
                <h3 style={{ fontSize: '24px', fontWeight: '400', marginBottom: '8px' }}>
                  {exp.company}
                </h3>
                <div style={{ color: '#10b981', fontSize: '16px', marginBottom: '4px' }}>
                  {exp.title} | {exp.industry}
                </div>
                <div style={{ color: '#888', fontSize: '14px' }}>
                  {exp.duration}
                </div>
              </div>

              <ul style={{ marginBottom: '20px', paddingLeft: '20px', lineHeight: '1.8', color: '#ccc' }}>
                {exp.summary.map((item, idx) => (
                  <li key={idx} style={{ marginBottom: '8px' }}>{item}</li>
                ))}
              </ul>

              <button
                onClick={() => toggleSection(exp.id)}
                style={{
                  backgroundColor: 'transparent',
                  color: '#10b981',
                  border: '1px solid #10b981',
                  borderRadius: '6px',
                  padding: '10px 20px',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  marginBottom: expandedSections[exp.id] ? '24px' : '0'
                }}
              >
                {expandedSections[exp.id] ? '▼ Hide' : '▶ View'} UX Context
              </button>

              {expandedSections[exp.id] && (
                <div style={{
                  backgroundColor: '#0a0a0a',
                  borderRadius: '8px',
                  padding: '24px',
                  border: '1px solid #1a1a1a',
                  lineHeight: '1.7'
                }}>
                  <div style={{ marginBottom: '24px' }}>
                    <h4 style={{ color: '#10b981', fontSize: '14px', fontWeight: '600', marginBottom: '12px', textTransform: 'uppercase' }}>
                      The Situation
                    </h4>
                    <p style={{ color: '#ccc' }}>{exp.deepContext.situation}</p>
                  </div>

                  <div style={{ marginBottom: '24px' }}>
                    <h4 style={{ color: '#10b981', fontSize: '14px', fontWeight: '600', marginBottom: '12px', textTransform: 'uppercase' }}>
                      The Approach
                    </h4>
                    <p style={{ color: '#ccc' }}>{exp.deepContext.approach}</p>
                  </div>

                  <div style={{ marginBottom: '24px' }}>
                    <h4 style={{ color: '#10b981', fontSize: '14px', fontWeight: '600', marginBottom: '12px', textTransform: 'uppercase' }}>
                      Key Decisions
                    </h4>
                    <ul style={{ paddingLeft: '20px', color: '#ccc' }}>
                      {exp.deepContext.keyDecisions.map((decision, idx) => (
                        <li key={idx} style={{ marginBottom: '12px' }}>{decision}</li>
                      ))}
                    </ul>
                  </div>

                  <div style={{ marginBottom: '24px' }}>
                    <h4 style={{ color: '#10b981', fontSize: '14px', fontWeight: '600', marginBottom: '12px', textTransform: 'uppercase' }}>
                      Impact
                    </h4>
                    <p style={{ color: '#ccc' }}>{exp.deepContext.impact}</p>
                  </div>

                  <div>
                    <h4 style={{ color: '#10b981', fontSize: '14px', fontWeight: '600', marginBottom: '12px', textTransform: 'uppercase' }}>
                      Lessons Learned
                    </h4>
                    <p style={{ color: '#ccc' }}>{exp.deepContext.lessonsLearned}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </section>

        {/* Skills Grid */}
        <section style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '300', marginBottom: '32px' }}>
            Skills & Expertise
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px'
          }}>
            <div style={{
              backgroundColor: '#0d2818',
              borderRadius: '12px',
              padding: '32px',
              border: '1px solid #10b981'
            }}>
              <h3 style={{
                color: '#10b981',
                fontSize: '18px',
                fontWeight: '600',
                marginBottom: '20px',
                textTransform: 'uppercase'
              }}>
                Strong
              </h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {skills.strong.map((skill, idx) => (
                  <li key={idx} style={{
                    padding: '10px 0',
                    borderBottom: idx < skills.strong.length - 1 ? '1px solid #1a3a2a' : 'none',
                    color: '#e0e0e0',
                    fontSize: '15px'
                  }}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{
              backgroundColor: '#2a2410',
              borderRadius: '12px',
              padding: '32px',
              border: '1px solid #d97706'
            }}>
              <h3 style={{
                color: '#fbbf24',
                fontSize: '18px',
                fontWeight: '600',
                marginBottom: '20px',
                textTransform: 'uppercase'
              }}>
                Moderate
              </h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {skills.moderate.map((skill, idx) => (
                  <li key={idx} style={{
                    padding: '10px 0',
                    borderBottom: idx < skills.moderate.length - 1 ? '1px solid #3a2810' : 'none',
                    color: '#e0e0e0',
                    fontSize: '15px'
                  }}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{
              backgroundColor: '#1a1a1a',
              borderRadius: '12px',
              padding: '32px',
              border: '1px solid #444'
            }}>
              <h3 style={{
                color: '#888',
                fontSize: '18px',
                fontWeight: '600',
                marginBottom: '20px',
                textTransform: 'uppercase'
              }}>
                Honest Gaps
              </h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {skills.gaps.map((skill, idx) => (
                  <li key={idx} style={{
                    padding: '10px 0',
                    borderBottom: idx < skills.gaps.length - 1 ? '1px solid #2a2a2a' : 'none',
                    color: '#999',
                    fontSize: '15px'
                  }}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Portfolio Explanation */}
        <section style={{
          backgroundColor: '#111',
          borderRadius: '12px',
          padding: '40px',
          marginBottom: '60px',
          border: '1px solid #222'
        }}>
          <h2 style={{ fontSize: '32px', fontWeight: '300', marginBottom: '12px' }}>
            About Work Samples
          </h2>
          <div style={{ color: '#ccc', fontSize: '15px', lineHeight: '1.8' }}>
            <p style={{ marginBottom: '20px' }}>
              You might notice this site doesn't include a traditional portfolio. Here's why:
            </p>
            
            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ color: '#10b981', fontSize: '16px', fontWeight: '600', marginBottom: '12px' }}>
                Enterprise Work is Under NDA
              </h3>
              <p style={{ color: '#aaa' }}>
                The bulk of my recent work at Expeditors involves internal logistics systems serving thousands 
                of users globally. These applications handle sensitive business operations and are protected by 
                strict confidentiality agreements.
              </p>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ color: '#10b981', fontSize: '16px', fontWeight: '600', marginBottom: '12px' }}>
                Older Work Doesn't Represent Current Capabilities
              </h3>
              <p style={{ color: '#aaa' }}>
                My portfolio from the early 2000s is dated both visually and technically. Modern enterprise UX 
                is about systems thinking, not pixel-perfect mockups.
              </p>
            </div>

            <div>
              <h3 style={{ color: '#10b981', fontSize: '16px', fontWeight: '600', marginBottom: '12px' }}>
                This Site IS the Portfolio
              </h3>
              <p style={{ color: '#aaa' }}>
                Instead of showing old work, I've built this interactive experience to demonstrate current 
                capabilities: strategic thinking, UX process depth, technical implementation, and the ability 
                to make complex information discoverable. This is meta-level UX design.
              </p>
            </div>
          </div>
        </section>

        {/* Fit Assessment */}
        <section id="fit" style={{
          backgroundColor: '#111',
          borderRadius: '12px',
          padding: '40px',
          marginBottom: '60px',
          border: '1px solid #222'
        }}>
          <h2 style={{ fontSize: '32px', fontWeight: '300', marginBottom: '12px' }}>
            Honest Fit Assessment
          </h2>
          <p style={{ color: '#888', marginBottom: '32px', fontSize: '15px' }}>
            Paste a job description below. The AI will give you an honest assessment of whether this role 
            is a good fit—including when it's NOT a match. This saves everyone time.
          </p>

          <textarea
            value={fitAssessmentInput}
            onChange={(e) => setFitAssessmentInput(e.target.value)}
            placeholder="Paste the job description here..."
            disabled={isLoading}
            style={{
              width: '100%',
              minHeight: '200px',
              backgroundColor: '#0a0a0a',
              border: '1px solid #333',
              borderRadius: '6px',
              padding: '18px',
              color: '#e0e0e0',
              fontSize: '15px',
              fontFamily: 'inherit',
              marginBottom: '20px',
              resize: 'vertical',
              outline: 'none'
            }}
          />

          <button
            onClick={handleFitAssessment}
            disabled={isLoading || !fitAssessmentInput.trim()}
            style={{
              backgroundColor: '#10b981',
              color: '#0a0a0a',
              border: 'none',
              borderRadius: '6px',
              padding: '14px 28px',
              fontWeight: '600',
              fontSize: '15px',
              cursor: isLoading ? 'not-allowed' : 'pointer',
              opacity: isLoading ? 0.5 : 1,
              marginBottom: '24px'
            }}
          >
            {isLoading ? 'Analyzing...' : 'Assess Fit'}
          </button>

          {fitResult && (
            <div style={{
              backgroundColor: '#0a0a0a',
              borderRadius: '8px',
              padding: '24px',
              border: '1px solid #1a1a1a',
              whiteSpace: 'pre-wrap',
              lineHeight: '1.7',
              color: '#ccc'
            }}>
              {fitResult}
            </div>
          )}
        </section>
      </main>

      <footer style={{
        textAlign: 'center',
        padding: '40px 0',
        borderTop: '1px solid #222',
        color: '#666',
        fontSize: '14px'
      }}>
        <div style={{ marginBottom: '12px', fontSize: '20px', fontWeight: '300' }}>
          Shandin Harper
        </div>
        <div style={{ marginBottom: '8px' }}>
          Senior UX Designer | Enterprise & Strategic Design
        </div>
        <div>
          <a href="mailto:shandin@hotmail.com" style={{ color: '#10b981', textDecoration: 'none' }}>
            Contact
          </a>
        </div>
      </footer>
    </div>
  );
}
