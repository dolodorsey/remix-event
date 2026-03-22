'use client';
import { useEffect, useRef } from 'react';
export default function Page() {
  const h = useRef(null);
  useEffect(() => {
    const o = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add('rv'); }), { threshold: 0.08, rootMargin: '60px' });
    document.querySelectorAll('.r').forEach(el => o.observe(el));
    setTimeout(() => { if (h.current) h.current.classList.add('on'); }, 200);
    return () => o.disconnect();
  }, []);
  const C = { bg: '#0D0E12', light: '#F3F3F1', gold: '#C8A348' };
  return (
    <div style={{background:C.bg,color:C.light,fontFamily:"'DM Sans',sans-serif"}}>
      <style dangerouslySetInnerHTML={{__html:`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600;700&family=DM+Mono:wght@400;500&display=swap');
        *{margin:0;padding:0;box-sizing:border-box}
        .r{opacity:0;transform:translateY(48px);transition:all 1.1s cubic-bezier(0.16,1,0.3,1)}.r.rv{opacity:1;transform:translateY(0)}
        .d1{transition-delay:.15s}.d2{transition-delay:.3s}.d3{transition-delay:.45s}
        .hw{opacity:0;transition:opacity 1.6s ease}.hw.on{opacity:1}
        .hw.on .hl{transform:scale(1) rotate(0deg);opacity:1}.hl{transform:scale(1.2) rotate(-10deg);opacity:0;transition:all 2s cubic-bezier(0.16,1,0.3,1) .3s}
        .hw.on .ht{opacity:1;transform:translateY(0)}.ht{opacity:0;transform:translateY(40px);transition:all 1.2s cubic-bezier(0.16,1,0.3,1) 1s}
        .hw.on .hc{opacity:1;transform:translateY(0)}.hc{opacity:0;transform:translateY(20px);transition:all 1s cubic-bezier(0.16,1,0.3,1) 1.4s}
        .grain{position:fixed;inset:0;pointer-events:none;z-index:9999;opacity:.035;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")}
        .bp{font-family:'DM Sans',sans-serif;font-size:10px;font-weight:700;letter-spacing:.15em;text-transform:uppercase;color:#0D0E12;background:linear-gradient(135deg,#C8A348,#8B7B3A);padding:18px 56px;border:none;cursor:pointer;text-decoration:none;display:inline-block;transition:all .4s cubic-bezier(0.16,1,0.3,1)}.bp:hover{transform:translateY(-2px);box-shadow:0 12px 40px rgba(200,163,72,.3)}
        .bo{font-family:'DM Sans',sans-serif;font-size:10px;font-weight:500;letter-spacing:.15em;text-transform:uppercase;color:#C8A348;border:1px solid rgba(200,163,72,.3);padding:16px 40px;text-decoration:none;display:inline-block;transition:all .3s;background:transparent}.bo:hover{border-color:#C8A348;background:rgba(200,163,72,.08)}
        .sbg{position:absolute;inset:0;z-index:0;background-size:cover;background-position:center;pointer-events:none}
        @media(max-width:768px){.dg{grid-template-columns:1fr!important}.nl{display:none!important}.fg{grid-template-columns:1fr!important}.eg{grid-template-columns:1fr!important}}
      `}}/>
      <div className="grain"/>

      <nav style={{position:'fixed',top:0,left:0,right:0,zIndex:200,padding:'24px clamp(20px,4vw,60px)',display:'flex',justifyContent:'space-between',alignItems:'center',background:'linear-gradient(180deg,rgba(13,14,18,.92) 0%,transparent 100%)'}}>
        <span style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:'clamp(20px,2.5vw,30px)',letterSpacing:'.1em',color:C.gold}}>REMIX</span>
        <div className="nl" style={{display:'flex',gap:'clamp(16px,2vw,32px)',alignItems:'center'}}>
          {['Culture','Events','Gallery'].map(l=><a key={l} href={`#${l.toLowerCase()}`} style={{fontFamily:"'DM Mono',monospace",fontSize:9,letterSpacing:'.25em',textTransform:'uppercase',color:'rgba(243,243,241,.4)',textDecoration:'none'}}>{l}</a>)}
          <a href="#tickets" className="bp" style={{padding:'10px 24px',fontSize:9}}>Access</a>
        </div>
      </nav>

      {/* HERO — flyer5 (website mockup) as BG, transparent vinyl logo */}
      <section ref={h} className="hw" style={{position:'relative',width:'100%',height:'100vh',overflow:'hidden',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
        <div className="sbg" style={{backgroundImage:'url(/flyer5.jpg)',opacity:.08,filter:'brightness(.4) saturate(.4)'}}/>
        <div style={{position:'absolute',inset:0,background:`radial-gradient(ellipse at 50% 40%,rgba(200,163,72,.15) 0%,${C.bg} 60%)`,zIndex:1}}/>
        <div style={{position:'absolute',inset:0,background:`linear-gradient(180deg,transparent 0%,rgba(13,14,18,.5) 70%,${C.bg} 100%)`,zIndex:2}}/>
        <div className="hl" style={{position:'relative',zIndex:3}}><img src="/logo.png" alt="REMIX" style={{width:'min(50vw,420px)',height:'auto',filter:'drop-shadow(0 0 80px rgba(200,163,72,.4))'}}/></div>
        <div className="ht" style={{position:'relative',zIndex:3,textAlign:'center',marginTop:32}}>
          <h1 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:'clamp(36px,6vw,72px)',letterSpacing:'.08em',color:C.light,lineHeight:.9}}>CURATED SOCIAL<br/><span style={{color:C.gold}}>MAGNETISM.</span></h1>
          <p style={{fontFamily:"'DM Mono',monospace",fontSize:10,letterSpacing:'.4em',textTransform:'uppercase',color:'rgba(200,163,72,.6)',marginTop:16}}>Then & Now, Done Right · Atlanta</p>
        </div>
        <div className="hc" style={{position:'relative',zIndex:3,display:'flex',gap:16,marginTop:40,flexWrap:'wrap',justifyContent:'center'}}>
          <a href="#tickets" className="bp">ACCESS THE NIGHT →</a><a href="#culture" className="bo">Explore</a>
        </div>
      </section>

      {/* CULTURE — flyer1 scattered BG right side */}
      <section id="culture" style={{position:'relative',padding:'140px clamp(24px,5vw,80px)',overflow:'hidden'}}>
        <div className="sbg" style={{backgroundImage:'url(/flyer1.jpg)',backgroundPosition:'85% center',backgroundSize:'45%',opacity:.145,filter:'brightness(.4) saturate(.4)'}}/>
        <div className="dg" style={{maxWidth:1400,margin:'0 auto',display:'grid',gridTemplateColumns:'1fr 1fr',gap:80,alignItems:'center',position:'relative',zIndex:1}}>
          <div className="r">
            <div style={{fontFamily:"'DM Mono',monospace",fontSize:9,letterSpacing:'.4em',textTransform:'uppercase',color:C.gold,marginBottom:24}}>The Movement</div>
            <h2 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:'clamp(40px,7vw,96px)',lineHeight:.85,letterSpacing:'.03em',color:C.light,marginBottom:28}}>SONIC<br/>UNPREDICTABILITY.<br/><span style={{color:C.gold}}>GENRE COLLISION.</span></h2>
            <p style={{fontSize:'clamp(14px,1.2vw,17px)',lineHeight:1.85,color:'rgba(243,243,241,.45)',maxWidth:480,marginBottom:36}}>REMIX is where premium sound meets social energy. Every set is curated, every crowd is intentional, every night is a one-time experience.</p>
            <div style={{display:'flex',gap:40,flexWrap:'wrap'}}>
              {[['6x','2026 Dates'],['PREMIUM','Sound'],['ATL','Flagship']].map(([n,l])=><div key={l}><div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:'clamp(28px,4vw,52px)',color:C.gold,lineHeight:1}}>{n}</div><div style={{fontFamily:"'DM Mono',monospace",fontSize:9,letterSpacing:'.35em',textTransform:'uppercase',color:'rgba(200,163,72,.5)',marginTop:6}}>{l}</div></div>)}
            </div>
          </div>
          {/* flyer3 as inline image */}
          <div className="r d2"><img src="/flyer3.jpg" alt="" style={{width:'100%',filter:'brightness(.85)',boxShadow:'0 40px 100px rgba(0,0,0,.5)'}}/></div>
        </div>
      </section>

      {/* CINEMATIC BREAK — flyer2 full bleed */}
      <section style={{position:'relative',height:'70vh',overflow:'hidden'}}>
        <img src="/flyer2.jpg" alt="" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',filter:'brightness(.4) saturate(.5)'}}/>
        <div style={{position:'absolute',inset:0,background:'linear-gradient(180deg,rgba(13,14,18,.8) 0%,rgba(13,14,18,.15) 40%,rgba(13,14,18,.8) 100%)'}}/>
        <div className="r" style={{position:'relative',zIndex:1,height:'100%',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',textAlign:'center'}}>
          <h2 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:'clamp(40px,8vw,100px)',color:C.light,lineHeight:.85}}>YOUR PRESENCE<br/>IS <span style={{color:C.gold}}>REQUIRED</span></h2>
          <p style={{fontFamily:"'DM Mono',monospace",fontSize:10,letterSpacing:'.4em',textTransform:'uppercase',color:'rgba(200,163,72,.5)',marginTop:20}}>Only Limited Places Remain</p>
        </div>
      </section>

      {/* EXPERIENCE — flyer4 scattered BG left */}
      <section id="events" style={{position:'relative',background:'#0A0B0E',padding:'120px clamp(24px,5vw,80px)',overflow:'hidden'}}>
        <div className="sbg" style={{backgroundImage:'url(/flyer4.jpg)',backgroundPosition:'8% center',backgroundSize:'35%',opacity:.125,filter:'brightness(.4) saturate(.4)'}}/>
        <div style={{maxWidth:1400,margin:'0 auto',position:'relative',zIndex:1}}>
          <div className="r"><h2 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:'clamp(36px,6vw,80px)',lineHeight:.9,color:C.light,marginBottom:64}}>THE <span style={{color:C.gold}}>EXPERIENCE</span></h2></div>
          <div className="eg" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:2,background:'rgba(200,163,72,.06)'}}>
            {[['CURATED DJ SETS','Genre-bending selections from ATL\'s finest'],['PREMIUM SOUND','Audiophile-grade system. Feel every frequency.'],['VIP BOTTLE SERVICE','Dedicated tables, personal server, guaranteed entry'],['LIVE PERFORMERS','Surprise guest appearances and live instruments'],['CONTENT MOMENTS','Branded photo activations designed for social'],['DRESS CODE','Elevated dress code. No exceptions.'],['MEDIA & PARTNERS','Brand activations and exclusive media access'],['LATE NIGHT VIBES','Doors at 10PM. Energy builds all night.'],['EXCLUSIVE ACCESS','Limited capacity. RSVP required.']].map(([t,d],i)=>
              <div key={i} className={`r d${i%3+1}`} style={{background:C.bg,padding:'36px 32px',borderLeft:'2px solid transparent',transition:'all .3s'}} onMouseEnter={e=>{e.currentTarget.style.borderLeftColor=C.gold;e.currentTarget.style.background='#0A0B0E'}} onMouseLeave={e=>{e.currentTarget.style.borderLeftColor='transparent';e.currentTarget.style.background=C.bg}}>
                <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:'clamp(16px,1.8vw,22px)',letterSpacing:'.04em',color:C.light,marginBottom:8}}>{t}</div>
                <div style={{fontSize:12,color:'rgba(243,243,241,.3)',lineHeight:1.7}}>{d}</div>
              </div>)}
          </div>
        </div>
      </section>

      {/* TICKETS — logo as BG center */}
      <section id="tickets" style={{position:'relative',padding:'140px clamp(24px,5vw,80px)',overflow:'hidden'}}>
        <div className="sbg" style={{backgroundImage:'url(/logo.png)',backgroundPosition:'center',backgroundSize:'30%',opacity:.14,filter:'brightness(.45)'}}/>
        <div style={{position:'absolute',inset:0,background:`radial-gradient(ellipse at 50% 50%,rgba(200,163,72,.15) 0%,transparent 60%)`}}/>
        <div className="r" style={{maxWidth:720,margin:'0 auto',textAlign:'center',position:'relative',zIndex:1}}>
          <h2 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:'clamp(40px,7vw,100px)',lineHeight:.9,color:C.light,marginBottom:24}}>LOCK IN<br/><span style={{color:C.gold}}>ACCESS</span></h2>
          <p style={{fontSize:15,lineHeight:1.8,color:'rgba(243,243,241,.45)',maxWidth:440,margin:'0 auto 44px'}}>RSVP now. Secure your REMIX access.</p>
          <a href="https://www.eventbrite.com/e/remix-the-mashup-music-experience-tickets-1985661232198" target="_blank" rel="noopener noreferrer" target="_blank" rel="noopener noreferrer" className="bp" style={{padding:'20px 64px',fontSize:11}}>RSVP →</a>
        </div>
      </section>

      <footer style={{background:'#080910',borderTop:'1px solid rgba(200,163,72,.08)',padding:'56px clamp(24px,5vw,80px) 36px'}}>
        <div className="fg" style={{maxWidth:1400,margin:'0 auto',display:'grid',gridTemplateColumns:'2fr 1fr 1fr',gap:40}}>
          <div><div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:32,color:C.gold}}>REMIX</div><div style={{fontFamily:"'DM Mono',monospace",fontSize:9,letterSpacing:'.3em',color:'rgba(200,163,72,.5)',marginTop:4}}>THEN & NOW, DONE RIGHT · ATL</div><p style={{fontSize:12,color:'rgba(243,243,241,.3)',marginTop:12,lineHeight:1.7}}>A KHG HugLife Event.</p></div>
          <div><div style={{fontFamily:"'DM Mono',monospace",fontSize:8,letterSpacing:'.4em',color:C.gold,marginBottom:16}}>EVENT</div>{['Culture','Events','Gallery'].map(l=><div key={l} style={{fontSize:12,color:'rgba(243,243,241,.3)',marginBottom:8}}>{l}</div>)}</div>
          <div><div style={{fontFamily:"'DM Mono',monospace",fontSize:8,letterSpacing:'.4em',color:C.gold,marginBottom:16}}>CONNECT</div>{['RSVP','@just.huglife','404.819.9609'].map(l=><div key={l} style={{fontSize:12,color:'rgba(243,243,241,.3)',marginBottom:8}}>{l}</div>)}</div>
        </div>
        <div style={{maxWidth:1400,margin:'24px auto 0',paddingTop:20,borderTop:'1px solid rgba(200,163,72,.06)',fontSize:10,fontFamily:"'DM Mono',monospace",color:'rgba(243,243,241,.12)'}}>© 2026 REMIX. A KHG Enterprise.</div>
      </footer>
    </div>
  );
}
