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

  // System prompt for the AI to understand Shandin's background
  const systemPrompt = `You are an AI assistant representing Shandin Harper, a UX/Product Design Leader with extensive experience spanning enterprise, consumer, mobile, e-learning, and game design.

IMPORTANT: When discussing experience, emphasize RELEVANCE and ADAPTABILITY over tenure. Focus on breadth of skills and current capabilities rather than emphasizing years in the industry.

FULL CAREER BACKGROUND (for context - surface relevant parts based on questions):

CURRENT ROLE:
- Expeditors (Global Logistics, 2015-Present, 9+ years): Enterprise UX, design systems, high-data applications, mentorship

LEADERSHIP & STRATEGIC WORK (CONCURRENT):
- Affordable Housing Nonprofit Board Chair (2020-Present): Digital transformation, UX/strategy
  * Rebuilt donation platform: Stripe integration, WCAG compliance, SEO → 65% donation increase
  * Full-stack execution: Designed, built, and deployed the website myself
  * Expanded housing capacity 2× across three states, 100% occupancy
  * Launched AI-driven YouTube/TikTok revenue strategy ($24K-$174K projected annually)
  * Board-level leadership: Balancing donor needs, beneficiary dignity, fiduciary responsibility
  * IMPORTANT: Demonstrates executive leadership, business acumen, revenue focus, accessibility commitment

ENTERPRISE & B2B:
- Expeditors (2015-Present): Internal logistics tools, design system creation, enterprise workflows
- Premera Blue Cross (2012-2015): Healthcare applications, HIPAA compliance, responsive design, accessibility
- Microsoft Business Division (2011): Enterprise tools, sales enablement

CONSUMER & RETAIL/E-COMMERCE:
- Action Engine (2005-2006): Mobile UI design for Brand N' Go apps including Amazon.com, eBay, Fox Sports, AccuWeather
  * IMPORTANT: Early mobile commerce (pre-iPhone era), designed interfaces for retail/e-commerce applications
- Microsoft Casual Games (2006): Consumer-facing gaming website, Flash animation, usability testing
- Microsoft Hardware (2006): Product design, personas, usability studies

MOBILE & CROSS-PLATFORM:
- T-Mobile (2011-2012): iOS, Android, Windows Phone apps - cross-platform design systems
- Action Engine (2005-2006): Early mobile application design (pre-smartphone era)

E-LEARNING & TRAINING DESIGN:
- Boeing (2006-2009): Computer-based training, Authorware and Flash modules, worked with SMEs and training teams
  * User research: Created personas, user scenarios, contextual inquiries, cognitive psychology principles
- Ravenworks (2001-2005): Project Lead Designer for Washington National Guard distance learning
  * Flash courseware, video streaming, instructional design collaboration
- Modern Digital (2000-2001): Training courseware, user interface design

GAME DESIGN & ENTERTAINMENT:
- Vulpine 3D Technologies (1999-2000): Senior Artist/Level Designer
  * Game design documents, custom user interfaces, interactive simulation prototypes
  * Defined creative vision, managed production schedules
- Microsoft Casual Games (2006): Gaming website UI
- Bsquare (2010-2011): Coke Freestyle touchscreen UI (gesture-based interface)

LEADERSHIP FOUNDATION:
- US Navy (1989-1999): Leading Petty Officer
  * Managed 20+ dental technicians and 10 doctors
  * Budget management, training, development, cross-functional meetings
  * OSHA compliance, policies, procedures
  * This foundation shaped approach to: team leadership, process management, cross-functional collaboration

UNIQUE STRENGTHS:
- Hand-codes prototypes (HTML/CSS/Angular/Bootstrap) - bridges design/dev gap and preserves design integrity
- Design systems expertise (built enterprise-wide patterns at Expeditors)
- Cross-domain versatility (enterprise, consumer, mobile, e-learning, gaming, nonprofit)
- Board-level leadership experience (nonprofit board chair - strategic growth, fundraising, expansion)
- Full-stack capability: Can design, build, deploy, and measure business outcomes
- Business acumen: Speaks in metrics (65% growth, 2× capacity, revenue projections)
- Accessibility champion: WCAG compliance as core design principle, not afterthought
- Modern platform thinking: AI-driven content strategy, social media funnels, payment systems
- Continuous adaptation through industry evolution (Flash → responsive → mobile-first → modern design systems)
- Led 100+ projects from concept to implementation
- Natural mentor and UX evangelist

TECHNICAL DEPTH:
- Design tools: Figma, Sketch, Photoshop, Illustrator (current, expert level)
- Code: HTML, CSS, JavaScript, Angular, Bootstrap (implements own designs)
- Prototyping: Prefers hand-coding for developer collaboration, uses Figma for speed when needed
- Shows technical adaptability across platform shifts

AREAS OF EXPERIENCE BY INDUSTRY:
- Logistics (Expeditors - current focus)
- Healthcare (Premera)
- Telecommunications (T-Mobile)
- Aerospace/Defense (Boeing, National Guard projects)
- Retail/E-commerce (Action Engine - Amazon, eBay apps)
- Gaming/Entertainment (Microsoft, Vulpine)

WHEN ANSWERING ROLE FIT QUESTIONS:
- Draw from relevant experience based on job requirements
- FRAME EXPERIENCE AS BREADTH AND ADAPTABILITY, not just longevity
- For RETAIL/E-COMMERCE roles: Mention Action Engine work (Amazon, eBay mobile apps), acknowledge it's older but emphasize transferable UX principles; also mention Stripe integration and conversion optimization from nonprofit work
- For ENTERPRISE roles: Lead with Expeditors, Premera, design systems
- For MOBILE roles: Mention T-Mobile cross-platform, Action Engine early mobile pioneer work
- For LEADERSHIP/SENIOR roles: Reference Board Chair experience (executive decision-making, stakeholder management, strategic growth), Navy leadership, mentorship at Expeditors
- For PRODUCT STRATEGY roles: Nonprofit work shows end-to-end ownership (strategy → design → implementation → revenue)
- For ACCESSIBILITY-FOCUSED roles: WCAG compliance as core principle in nonprofit rebuild
- For E-LEARNING/TRAINING: Boeing, Ravenworks, instructional design collaboration
- For BUSINESS-MINDED roles: Emphasize metrics from nonprofit (65% donation growth, 2× capacity, revenue diversification)
- Be honest about recency: Frame older experience as "early mobile commerce" or "foundational experience" rather than emphasizing how long ago
- Emphasize ADAPTATION: "I've evolved through multiple platform shifts" rather than "I've been doing this for decades"

COMMUNICATION STYLE:
- Thoughtful and strategic
- Concrete examples over abstract claims
- Emphasize current skills and adaptability
- Frame experience as breadth and versatility, not tenure
- Focus on transferable principles and process
- When mentioning older work, emphasize what you learned and how it informs current practice
- AVOID phrases like "I've been doing this for X years" - instead say "I have experience across..."

WHEN ANSWERING:
- Surface the most relevant experience for the question asked
- Use specific examples from Shandin's background
- Be conversational but professional  
- Acknowledge when experience is older but show how skills transfer
- Show breadth as a strength: "I've designed across enterprise, consumer, and mobile" NOT "I've been in UX for 25 years"
- Emphasize continuous learning and adaptation
- Keep responses concise (2-3 paragraphs) unless depth is requested

HANDLING PORTFOLIO QUESTIONS:
- If asked about portfolio/work samples: Explain that recent work is under NDA (enterprise internal tools), older work is dated
- Frame this interactive site as the portfolio itself - demonstrates strategic thinking, technical capability, UX process
- Offer to discuss specific projects in detail conversationally (process, decisions, outcomes) even if visuals can't be shared
- Emphasize: "Enterprise UX is about systems thinking, not pretty screenshots"

Answer questions as if you are Shandin's knowledgeable assistant who understands his diverse background and can intelligently match experience to role requirements while emphasizing current capability and adaptability.`;

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
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          systemPrompt: systemPrompt,
          messages: [...chatMessages, userMessage].map(msg => ({
            role: msg.role === 'user' ? 'user' : 'assistant',
            content: msg.content
          })),
          type: 'chat'
        })
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Request failed');
      }

      const assistantMessage = {
        role: 'assistant',
        content: data.content[0].text
      };
      setChatMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Chat error:', error);
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

SHANDIN'S FULL BACKGROUND (draw from relevant areas based on job requirements):

STRONGEST AREAS:
- Enterprise UX & complex workflows (9+ years at Expeditors, 3 years at Premera)
- Design systems & scalable patterns (built enterprise-wide system at Expeditors)
- Developer collaboration (hand-codes prototypes in HTML/CSS/Angular)
- Cross-functional leadership (Navy: managed 20+ people, Board Chair, 10+ years in lead roles)
- User research & usability testing (Boeing, throughout career)
- High-data interface design (Expeditors logistics applications)

STRONG BUT LESS RECENT:
- Consumer/Retail/E-commerce UX (Action Engine 2005-2006: designed for Amazon, eBay mobile apps)
  * Pre-iPhone mobile commerce, but UX principles still relevant
- Mobile UX (Action Engine 2005-2006, T-Mobile 2011-2012: iOS, Android, Windows)
- E-learning/Training design (Boeing 2006-2009, Ravenworks 2001-2005)
- Game UX (Vulpine 1999-2000, Microsoft Casual Games 2006, Bsquare Coke Freestyle 2010)

MODERATE AREAS:
- Rapid prototyping in Figma/Sketch (capable but prefers hand-coding for dev collaboration)
- Pure consumer apps (has experience but not recent primary focus)
- Marketing/growth-focused design (not a core strength)

HONEST GAPS:
- VR/AR interfaces (no direct experience)
- Pure visual/brand design without UX component
- Junior IC roles (extensive experience, would be over-qualified)
- Cutting-edge e-commerce optimization (retail experience exists but is from early 2000s)

WHEN ANALYZING FIT:
1. Identify key requirements in the job description
2. Match against Shandin's FULL background (not just recent work)
3. Assess: Strong Fit / Moderate Fit / Weak Fit
4. Be specific about WHY with examples from his background
5. If experience is dated, acknowledge it but assess if principles transfer
6. For RETAIL/E-COMMERCE roles: Mention Action Engine (Amazon/eBay apps) but note it's from early 2000s
7. For ENTERPRISE roles: Lead with Expeditors and design systems work
8. For MOBILE roles: Cite T-Mobile and Action Engine
9. For LEADERSHIP roles: Reference Board Chair experience + Navy + team lead experience
10. Show breadth as a strength when relevant

BE HONEST:
- If it's a Weak Fit, say so directly and explain why
- If experience is old, acknowledge recency but assess transferability
- "Moderate Fit" means: has relevant experience but not ideal match
- Don't oversell; save everyone time with honest assessment

Format your response clearly with:
- Overall Assessment: Strong/Moderate/Weak Fit
- Key Matches: (list specific alignments)
- Considerations: (any concerns or dated experience)
- Recommendation: (should they talk or pass)`;

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          systemPrompt: fitSystemPrompt,
          messages: [{
            role: 'user',
            content: `Please analyze this job description for fit:\n\n${fitAssessmentInput}`
          }],
          type: 'fit'
        })
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Request failed');
      }

      setFitResult(data.content[0].text);
    } catch (error) {
      console.error('Fit assessment error:', error);
      setFitResult('Sorry, I encountered an error analyzing the fit. Please try again.');
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

  // Experience data with expandable context
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
        'Mentor junior UX designers and evangelize UX principles across the organization',
        'Conduct user research, usability testing, and deliver full UX lifecycle from concept to implementation'
      ],
      deepContext: {
        situation: "Joined Expeditors when their internal tools were a patchwork of inconsistent interfaces built over decades. Each regional team had different patterns, no unified design language, and developers were making UX decisions by default. The applications handled complex logistics operations—shipment tracking, customs documentation, financial reconciliation—with millions of dollars at stake in each workflow.",
        approach: "Started by conducting an audit of existing patterns and interviewing power users across different regions. Built a case for design systems by showing the cost of inconsistency (training time, errors, development redundancy). Created a grassroots coalition of developers who wanted better patterns. Began with small, high-impact components and proved value before scaling.",
        keyDecisions: [
          "Chose to hand-code the component library in Angular rather than use a design tool - this earned developer trust and ensured design intent was preserved in implementation",
          "Prioritized data-dense interfaces over aesthetics - our users needed efficiency, not beauty",
          "Built the design system iteratively rather than big-bang - each component had to prove its worth in production before being canonized"
        ],
        impact: "The design system now powers 40+ internal applications. Reduced development time for new features by ~30%. More importantly, created a shared language between design and development that didn't exist before.",
        lessonsLearned: "Design systems in enterprise environments are more about people than pixels. The technical artifact (the component library) is less important than the relationships and processes you build around it. Also learned that sometimes the best design tool is a code editor—speaking the developer's language opens doors."
      }
    },
    {
      id: 'nonprofit',
      company: 'Affordable Housing Nonprofit',
      title: 'Board Chair & UX/Digital Strategy Lead',
      duration: '2020 – Present',
      industry: 'Nonprofit / Social Impact',
      summary: [
        'Led digital transformation: rebuilt donation platform with Stripe integration, WCAG-compliant UX, and SEO optimization—increasing online donations 65%',
        'Expanded organizational housing capacity 2× across three states while maintaining 100% occupancy',
        'Launched AI-driven YouTube/TikTok content strategy (Crafty Critters & Slime Galaxy) projected to generate $24K-$174K annual revenue',
        'Guided property acquisition and rehabilitation strategy, securing VA and low-income tenant partnerships'
      ],
      deepContext: {
        situation: "The foundation relied heavily on in-person fundraising events and had virtually no online donation infrastructure. The website was outdated, not accessible, and didn't inspire donor confidence. Meanwhile, the housing portfolio was limited to a single property, constraining impact. The organization needed both digital modernization and strategic growth to sustain its mission.",
        approach: "Took a dual-track approach: First, applied UX thinking to the donor journey—from discovery to first gift to recurring giving. Rebuilt the website as a trust-building tool with accessibility at its core. Second, developed a diversified revenue strategy that included both traditional real estate expansion and modern content monetization through social platforms. Treated each initiative as a UX problem: What's the user need? What's the friction? How do we build trust?",
        keyDecisions: [
          "Chose Stripe for payment processing despite higher fees—the UX and trust signals were worth it for donor conversion",
          "Implemented WCAG 2.1 AA compliance from day one, not as an afterthought—accessibility is both ethical and expands the donor base",
          "Built the website myself rather than hiring an agency—maintained full control over UX decisions and technical implementation",
          "Diversified revenue beyond grants and events by launching AI-assisted content creation—this required convincing a traditional board to embrace modern platforms",
          "Focused housing expansion on 100% occupancy with mission-aligned tenants (VA, low-income) rather than chasing maximum revenue"
        ],
        impact: "Online donations increased 65% within the first year. Housing capacity doubled from one to multiple properties across three states. The YouTube/TikTok content strategy is on track to generate $24K-$174K annually, creating a sustainable funding source independent of grants. Most importantly, the organization now has digital infrastructure and strategic diversification to sustain long-term growth.",
        lessonsLearned: "UX principles apply far beyond software—the donor journey is a user experience problem. Board-level leadership requires balancing stakeholder needs (donors want transparency, beneficiaries need dignity, board members need fiduciary responsibility) similar to enterprise stakeholder management. Sometimes the biggest design challenge isn't the interface, it's changing organizational mindset. Also learned that modern platforms (AI tools, social media) can be powerful force multipliers for small nonprofits if approached strategically."
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
        situation: "Healthcare industry was transitioning to responsive design and mobile-first thinking. Premera's member portal was desktop-only and struggling to serve an increasingly mobile user base. Additionally, compliance requirements (HIPAA, accessibility) added layers of complexity that couldn't be ignored.",
        approach: "Worked directly with compliance teams to understand constraints upfront rather than discovering them later. Partnered closely with developers to understand technical limitations. Built responsive prototypes that demonstrated feasibility before committing to full designs.",
        keyDecisions: [
          "Chose progressive enhancement over mobile-first - our user base was still predominantly desktop, but we needed mobile to work",
          "Implemented designs myself in jQuery/Bootstrap to ensure they actually worked across browsers and devices",
          "Prioritized accessibility from day one rather than retrofitting later"
        ],
        impact: "Successfully launched responsive member portal that maintained compliance while improving mobile experience. Reduced development back-and-forth by implementing designs myself.",
        lessonsLearned: "Constraints (compliance, accessibility, legacy systems) aren't obstacles—they're design requirements. Working within them makes you a better designer. Also learned that implementing your own designs is the fastest way to understand what works and what doesn't."
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
        'Delivered UI assets including typography, icons, and animations for iOS, Android, and Windows apps'
      ],
      deepContext: {
        situation: "T-Mobile was building cross-platform applications during the early smartphone era when iOS, Android, and Windows Phone all had different design languages. The challenge was maintaining brand consistency while respecting platform conventions.",
        approach: "Created a design system that had platform-specific implementations but shared core principles. Worked closely with developers on each platform to understand constraints and idioms.",
        keyDecisions: [
          "Chose to respect platform conventions rather than force brand consistency everywhere",
          "Created separate asset libraries for each platform rather than trying to use the same assets everywhere",
          "Focused on interaction patterns and information architecture as the unifying elements"
        ],
        impact: "Successfully launched apps that felt native to each platform while maintaining T-Mobile's brand identity.",
        lessonsLearned: "Sometimes consistency is knowing when NOT to be consistent. Platform conventions exist for good reasons, and users expect apps to behave like other apps on their device."
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
          Experienced across enterprise, consumer, and mobile platforms. Currently focused on 
          scalable design patterns and high-stakes applications.
        </div>
        
        {/* CTA Buttons */}
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
              cursor: 'pointer',
              transition: 'transform 0.2s'
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

      <main style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '40px'
      }}>
        {/* AI Chat Section */}
        <section id="chat" style={{
          backgroundColor: '#111',
          borderRadius: '12px',
          padding: '40px',
          marginBottom: '60px',
          border: '1px solid #222'
        }}>
          <h2 style={{
            fontSize: '32px',
            fontWeight: '300',
            marginBottom: '12px',
            letterSpacing: '-0.5px'
          }}>
            Ask AI About My UX Approach
          </h2>
          <p style={{
            color: '#888',
            marginBottom: '32px',
            fontSize: '15px',
            lineHeight: '1.6'
          }}>
            Have questions about my experience, process, or approach? This AI assistant is trained on my 
            full background—enterprise, consumer, mobile, e-learning, and leadership work. Ask it to assess 
            role fit, explain how I approach design problems, or discuss how my experience transfers across 
            different domains.
          </p>

          {/* Chat Messages */}
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
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
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
              <div style={{ color: '#888', fontStyle: 'italic' }}>
                Thinking...
              </div>
            )}
          </div>

          {/* Chat Input */}
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
          <h2 style={{
            fontSize: '32px',
            fontWeight: '300',
            marginBottom: '32px',
            letterSpacing: '-0.5px'
          }}>
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
                <h3 style={{
                  fontSize: '24px',
                  fontWeight: '400',
                  marginBottom: '8px'
                }}>
                  {exp.company}
                </h3>
                <div style={{
                  color: '#10b981',
                  fontSize: '16px',
                  marginBottom: '4px'
                }}>
                  {exp.title} | {exp.industry}
                </div>
                <div style={{ color: '#888', fontSize: '14px' }}>
                  {exp.duration}
                </div>
              </div>

              {/* Summary bullets */}
              <ul style={{
                marginBottom: '20px',
                paddingLeft: '20px',
                lineHeight: '1.8',
                color: '#ccc'
              }}>
                {exp.summary.map((item, idx) => (
                  <li key={idx} style={{ marginBottom: '8px' }}>{item}</li>
                ))}
              </ul>

              {/* View Context Button */}
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

              {/* Expanded Context */}
              {expandedSections[exp.id] && (
                <div style={{
                  backgroundColor: '#0a0a0a',
                  borderRadius: '8px',
                  padding: '24px',
                  border: '1px solid #1a1a1a',
                  lineHeight: '1.7'
                }}>
                  <div style={{ marginBottom: '24px' }}>
                    <h4 style={{ color: '#10b981', fontSize: '14px', fontWeight: '600', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                      The Situation
                    </h4>
                    <p style={{ color: '#ccc' }}>{exp.deepContext.situation}</p>
                  </div>

                  <div style={{ marginBottom: '24px' }}>
                    <h4 style={{ color: '#10b981', fontSize: '14px', fontWeight: '600', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                      The Approach
                    </h4>
                    <p style={{ color: '#ccc' }}>{exp.deepContext.approach}</p>
                  </div>

                  <div style={{ marginBottom: '24px' }}>
                    <h4 style={{ color: '#10b981', fontSize: '14px', fontWeight: '600', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                      Key Decisions
                    </h4>
                    <ul style={{ paddingLeft: '20px', color: '#ccc' }}>
                      {exp.deepContext.keyDecisions.map((decision, idx) => (
                        <li key={idx} style={{ marginBottom: '12px' }}>{decision}</li>
                      ))}
                    </ul>
                  </div>

                  <div style={{ marginBottom: '24px' }}>
                    <h4 style={{ color: '#10b981', fontSize: '14px', fontWeight: '600', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                      Impact
                    </h4>
                    <p style={{ color: '#ccc' }}>{exp.deepContext.impact}</p>
                  </div>

                  <div>
                    <h4 style={{ color: '#10b981', fontSize: '14px', fontWeight: '600', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
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
          <h2 style={{
            fontSize: '32px',
            fontWeight: '300',
            marginBottom: '32px',
            letterSpacing: '-0.5px'
          }}>
            Skills & Expertise
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px'
          }}>
            {/* Strong Skills */}
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
                textTransform: 'uppercase',
                letterSpacing: '1px'
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

            {/* Moderate Skills */}
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
                textTransform: 'uppercase',
                letterSpacing: '1px'
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

            {/* Gaps */}
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
                textTransform: 'uppercase',
                letterSpacing: '1px'
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

        {/* Why No Portfolio Section */}
        <section style={{
          backgroundColor: '#111',
          borderRadius: '12px',
          padding: '40px',
          marginBottom: '60px',
          border: '1px solid #222'
        }}>
          <h2 style={{
            fontSize: '32px',
            fontWeight: '300',
            marginBottom: '12px',
            letterSpacing: '-0.5px'
          }}>
            About Work Samples
          </h2>
          <div style={{
            color: '#ccc',
            fontSize: '15px',
            lineHeight: '1.8'
          }}>
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
                strict confidentiality agreements. I can discuss process, decisions, and outcomes in conversation, 
                but I can't share screenshots or detailed specs publicly.
              </p>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ color: '#10b981', fontSize: '16px', fontWeight: '600', marginBottom: '12px' }}>
                Older Work Doesn't Represent Current Capabilities
              </h3>
              <p style={{ color: '#aaa' }}>
                My portfolio from the early 2000s—Flash websites, game interfaces, mobile apps from the 
                pre-smartphone era—is dated both visually and technically. Showing 15-year-old work would 
                misrepresent what I do now. Modern enterprise UX is about systems thinking, not pixel-perfect 
                mockups, and that's harder to showcase in static images.
              </p>
            </div>

            <div style={{ marginBottom: '0' }}>
              <h3 style={{ color: '#10b981', fontSize: '16px', fontWeight: '600', marginBottom: '12px' }}>
                This Site IS the Portfolio
              </h3>
              <p style={{ color: '#aaa' }}>
                Instead of showing old work, I've built this interactive experience to demonstrate current 
                capabilities: strategic thinking, UX process depth, technical implementation (this site uses 
                React + Claude's API), and the ability to make complex information discoverable. The AI 
                conversation feature lets you explore my background in a way that's more useful than 
                static case studies. This is meta-level UX design—I redesigned the job application interface itself.
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
          <h2 style={{
            fontSize: '32px',
            fontWeight: '300',
            marginBottom: '12px',
            letterSpacing: '-0.5px'
          }}>
            Honest Fit Assessment
          </h2>
          <p style={{
            color: '#888',
            marginBottom: '32px',
            fontSize: '15px',
            lineHeight: '1.6'
          }}>
            Paste a job description below. The AI will give you an honest assessment of whether this role is a good fit—including when it's NOT a match. This saves everyone time.
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

        {/* Footer */}
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
      </main>
    </div>
  );
}
