import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Arch Tech AI Solutions</title>
        <meta name="description" content="Your Partner for Digital Solutions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div style={{ minHeight: '100vh', backgroundColor: 'white' }}>
        {/* Hero Section */}
        <section style={{ 
          padding: '96px 24px',
          background: 'linear-gradient(135deg, #ffffff 0%, #f0f9ff 50%, #e0f2fe 100%)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Background decorative elements */}
          <div style={{
            position: 'absolute',
            top: '20%',
            right: '10%',
            width: '200px',
            height: '200px',
            background: 'linear-gradient(45deg, #3b82f6, #1d4ed8)',
            borderRadius: '50%',
            opacity: '0.1',
            zIndex: 0
          }}></div>
          <div style={{
            position: 'absolute',
            bottom: '10%',
            left: '5%',
            width: '150px',
            height: '150px',
            background: 'linear-gradient(45deg, #60a5fa, #3b82f6)',
            borderRadius: '50%',
            opacity: '0.08',
            zIndex: 0
          }}></div>
          
          <div style={{ maxWidth: '1024px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '48px', flexWrap: 'wrap' }}>
              <div style={{ flex: '0 0 auto' }}>
                <div style={{
                  padding: '20px',
                  background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                  borderRadius: '20px',
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                  border: '1px solid rgba(59, 130, 246, 0.1)'
                }}>
                  <img 
                    src="/logo.png" 
                    alt="Arch Tech AI Solutions Logo" 
                    style={{ 
                      width: '480px',
                      height: 'auto',
                      display: 'block'
                    }}
                  />
                </div>
              </div>
              <div style={{ flex: '1 1 400px', minWidth: '400px' }}>
                <h2 style={{
                  fontSize: '36px',
                  fontWeight: 'bold',
                  background: 'linear-gradient(135deg, #1e40af, #3b82f6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginBottom: '32px',
                  letterSpacing: '0.5px'
                }}>
                  Arch Tech AI Solutions
                </h2>
                <h1 style={{ 
                  fontSize: '48px', 
                  fontWeight: 'bold', 
                  color: '#111827', 
                  marginBottom: '24px',
                  lineHeight: '1.2'
                }}>
                  Your Partner for<br />Digital Solutions
                </h1>
                <p style={{ 
                  fontSize: '18px', 
                  color: '#6b7280', 
                  marginBottom: '40px',
                  maxWidth: '512px'
                }}>
                  We design, develop, and deploy cutting-edge web solutions that drive business growth and digital transformation.
                </p>
                <button style={{
                  background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                  color: 'white',
                  padding: '14px 36px',
                  borderRadius: '9999px',
                  fontWeight: '600',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 10px 15px -3px rgba(59, 130, 246, 0.3)',
                  transition: 'all 0.3s ease'
                }}>
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Our Services Section */}
        <section style={{ 
          padding: '80px 24px', 
          background: 'linear-gradient(135deg, #f8fafc 0%, #e0f2fe 50%, #f0f9ff 100%)',
          position: 'relative'
        }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <h2 style={{ 
              fontSize: '36px', 
              fontWeight: 'bold', 
              textAlign: 'center', 
              marginBottom: '64px',
              background: 'linear-gradient(135deg, #1e40af, #3b82f6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Our Services
            </h2>
            
            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap',
              gap: '48px',
              justifyContent: 'center'
            }}>
              <div style={{ 
                textAlign: 'center',
                flex: '1 1 300px',
                maxWidth: '350px',
                background: 'white',
                padding: '32px 24px',
                borderRadius: '16px',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                border: '1px solid rgba(59, 130, 246, 0.1)',
                transition: 'all 0.3s ease'
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                  borderRadius: '50%',
                  margin: '0 auto 24px auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 10px 15px -3px rgba(59, 130, 246, 0.3)'
                }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    border: '2px solid white',
                    borderRadius: '4px'
                  }}></div>
                </div>
                <h3 style={{ 
                  fontSize: '20px', 
                  fontWeight: '600', 
                  marginBottom: '12px',
                  color: '#1e40af'
                }}>
                  Web Design
                </h3>
                <p style={{ color: '#6b7280' }}>
                  Modern, responsive websites that capture your brand and engage users across all devices with intuitive user experiences.
                </p>
              </div>
              
              <div style={{ 
                textAlign: 'center',
                flex: '1 1 300px',
                maxWidth: '350px',
                background: 'white',
                padding: '32px 24px',
                borderRadius: '16px',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                border: '1px solid rgba(59, 130, 246, 0.1)',
                transition: 'all 0.3s ease'
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                  borderRadius: '50%',
                  margin: '0 auto 24px auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 10px 15px -3px rgba(59, 130, 246, 0.3)'
                }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    border: '2px solid white',
                    borderRadius: '50%'
                  }}></div>
                </div>
                <h3 style={{ 
                  fontSize: '20px', 
                  fontWeight: '600', 
                  marginBottom: '12px',
                  color: '#1e40af'
                }}>
                  Web Development
                </h3>
                <p style={{ color: '#6b7280' }}>
                  Full-stack web applications built with cutting-edge technologies, scalable architecture, and robust security features.
                </p>
              </div>
              
              <div style={{ 
                textAlign: 'center',
                flex: '1 1 300px',
                maxWidth: '350px',
                background: 'white',
                padding: '32px 24px',
                borderRadius: '16px',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                border: '1px solid rgba(59, 130, 246, 0.1)',
                transition: 'all 0.3s ease'
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                  borderRadius: '50%',
                  margin: '0 auto 24px auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 10px 15px -3px rgba(59, 130, 246, 0.3)'
                }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    border: '2px solid white'
                  }}></div>
                </div>
                <h3 style={{ 
                  fontSize: '20px', 
                  fontWeight: '600', 
                  marginBottom: '12px',
                  color: '#1e40af'
                }}>
                  Digital Strategy
                </h3>
                <p style={{ color: '#6b7280' }}>
                  Comprehensive digital transformation strategies that optimize your online presence and drive measurable business results.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Work Section */}
        <section style={{ 
          padding: '80px 24px', 
          backgroundColor: 'white',
          position: 'relative'
        }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <h2 style={{ 
              fontSize: '36px', 
              fontWeight: 'bold', 
              textAlign: 'center', 
              marginBottom: '64px',
              background: 'linear-gradient(135deg, #1e40af, #3b82f6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Our Work
            </h2>
            
            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap',
              gap: '64px', 
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <div style={{
                background: 'linear-gradient(135deg, #e0f2fe, #f0f9ff)',
                height: '256px',
                border: '1px solid rgba(59, 130, 246, 0.2)',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flex: '1 1 400px',
                maxWidth: '500px',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(45deg, #3b82f6, #1d4ed8)',
                  borderRadius: '50%',
                  opacity: '0.1'
                }}></div>
                <span style={{ 
                  color: '#3b82f6', 
                  fontSize: '18px',
                  fontWeight: '600'
                }}>Project Image</span>
              </div>
              <div style={{ flex: '1 1 400px', maxWidth: '500px' }}>
                <h3 style={{ 
                  fontSize: '24px', 
                  fontWeight: '600', 
                  marginBottom: '16px',
                  color: '#1e40af'
                }}>
                  E-Commerce Platform Redesign
                </h3>
                <p style={{ 
                  color: '#6b7280', 
                  lineHeight: '1.6',
                  marginBottom: '24px'
                }}>
                  Complete redesign and development of a modern e-commerce platform with enhanced user experience, mobile optimization, and integrated payment solutions that increased conversion rates by 40%.
                </p>
                <div style={{
                  display: 'inline-block',
                  padding: '8px 16px',
                  background: 'linear-gradient(135deg, #dbeafe, #bfdbfe)',
                  color: '#1e40af',
                  borderRadius: '20px',
                  fontSize: '14px',
                  fontWeight: '500',
                  border: '1px solid rgba(59, 130, 246, 0.2)'
                }}>
                  40% Conversion Increase
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Our Clients Say Section */}
        <section style={{ 
          padding: '80px 24px', 
          background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #dbeafe 100%)',
          position: 'relative'
        }}>
          {/* Background decorative element */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '300px',
            height: '300px',
            background: 'linear-gradient(45deg, #3b82f6, #1d4ed8)',
            borderRadius: '50%',
            opacity: '0.05',
            zIndex: 0
          }}></div>
          
          <div style={{ maxWidth: '1024px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
            <h2 style={{ 
              fontSize: '36px', 
              fontWeight: 'bold', 
              marginBottom: '64px',
              background: 'linear-gradient(135deg, #1e40af, #3b82f6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              What Our Clients Say
            </h2>
            
            <div style={{
              background: 'white',
              padding: '48px 32px',
              borderRadius: '20px',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
              border: '1px solid rgba(59, 130, 246, 0.1)',
              position: 'relative'
            }}>
              <div style={{ 
                fontSize: '64px', 
                color: '#3b82f6', 
                marginBottom: '24px',
                opacity: '0.3'
              }}>"</div>
              <blockquote style={{ 
                fontSize: '18px', 
                color: '#6b7280', 
                fontStyle: 'italic',
                lineHeight: '1.6',
                maxWidth: '768px',
                margin: '0 auto 24px auto'
              }}>
                Arch Tech AI Solutions transformed our digital presence with their innovative approach and technical expertise. Our website performance improved dramatically, and we saw a 60% increase in online engagement within the first month.
              </blockquote>
              <div style={{
                display: 'inline-block',
                padding: '8px 20px',
                background: 'linear-gradient(135deg, #dbeafe, #bfdbfe)',
                color: '#1e40af',
                borderRadius: '20px',
                fontSize: '14px',
                fontWeight: '600'
              }}>
                60% Engagement Increase
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
