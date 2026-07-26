'use client';

import { useState } from 'react';

const WEBHOOK = 'https://dorsey.app.n8n.cloud/webhook/khg-form-submit';
const initial = { full_name:'', email:'', phone:'', birthday_person:'', celebration_date:'', guest_count:'4', package_interest:'', instagram:'', notes:'' };

export default function RemixBirthdayForm() {
  const [form,setForm] = useState(initial);
  const [status,setStatus] = useState('idle');
  const set = (key,value) => setForm((current)=>({...current,[key]:value}));

  async function submit(event) {
    event.preventDefault();
    setStatus('submitting');
    try {
      const response = await fetch(WEBHOOK, { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({ brand_key:'remix', form_type:'birthday', full_name:form.full_name, email:form.email, phone:form.phone, form_data:form, source:'standalone_form', submitted_at:new Date().toISOString() }) });
      if (!response.ok) throw new Error('Submission failed');
      setStatus('success'); setForm(initial);
    } catch { setStatus('error'); }
  }

  return (
    <main style={styles.page}>
      <div style={styles.background}><img src="/images/forms-bg.png" alt="" style={styles.image}/><div style={styles.overlay}/></div>
      <section style={styles.card}>
        <a href="/forms" style={styles.back}>← REMIX Forms</a>
        {status === 'success' ? <Success /> : (
          <>
            <div style={styles.icon}>🎂</div>
            <h1 style={styles.title}>Birthday Celebration</h1>
            <p style={styles.copy}>Request birthday admission, a table, a section or a customized group celebration.</p>
            <form onSubmit={submit}>
              <div style={styles.grid}>
                <Field label="Your full name"><input required value={form.full_name} onChange={(e)=>set('full_name',e.target.value)} style={styles.input}/></Field>
                <Field label="Email"><input required type="email" value={form.email} onChange={(e)=>set('email',e.target.value)} style={styles.input}/></Field>
                <Field label="Mobile phone"><input required type="tel" value={form.phone} onChange={(e)=>set('phone',e.target.value)} style={styles.input}/></Field>
                <Field label="Birthday person"><input required value={form.birthday_person} onChange={(e)=>set('birthday_person',e.target.value)} style={styles.input}/></Field>
                <Field label="Celebration date"><input required type="date" value={form.celebration_date} onChange={(e)=>set('celebration_date',e.target.value)} style={styles.input}/></Field>
                <Field label="Guest count"><input required type="number" min="1" max="100" value={form.guest_count} onChange={(e)=>set('guest_count',e.target.value)} style={styles.input}/></Field>
                <Field label="Package interest"><select required value={form.package_interest} onChange={(e)=>set('package_interest',e.target.value)} style={styles.input}><option value="">Select…</option><option>Complimentary birthday RSVP</option><option>Birthday table</option><option>Birthday section</option><option>Large group celebration</option><option>Need recommendations</option></select></Field>
                <Field label="Instagram"><input value={form.instagram} onChange={(e)=>set('instagram',e.target.value)} placeholder="@username" style={styles.input}/></Field>
              </div>
              <Field label="Additional notes"><textarea rows="4" value={form.notes} onChange={(e)=>set('notes',e.target.value)} style={{...styles.input,resize:'vertical'}}/></Field>
              {status === 'error' && <div style={styles.error}>Something went wrong. Please try again.</div>}
              <button disabled={status==='submitting'} style={styles.button}>{status==='submitting'?'Submitting…':'Submit Birthday Request'}</button>
            </form>
          </>
        )}
      </section>
    </main>
  );
}

function Field({label,children}) { return <label style={styles.field}><span style={styles.label}>{label}</span>{children}</label>; }
function Success() { return <div style={{textAlign:'center'}}><div style={styles.success}>✓</div><h1 style={styles.title}>Request received</h1><p style={styles.copy}>The REMIX team will follow up with availability and package options.</p><a href="/forms/birthday" style={styles.back}>Submit another request</a></div>; }
const styles = {
  page:{minHeight:'100vh',position:'relative',padding:'70px 20px',color:'#fff',fontFamily:"'DM Sans',sans-serif"}, background:{position:'fixed',inset:0,zIndex:0}, image:{width:'100%',height:'100%',objectFit:'cover'}, overlay:{position:'absolute',inset:0,background:'rgba(0,0,0,.78)'},
  card:{position:'relative',zIndex:1,width:'min(760px,100%)',margin:'0 auto',padding:'clamp(26px,5vw,46px)',border:'1px solid rgba(255,255,255,.16)',borderRadius:20,background:'rgba(8,6,4,.78)',backdropFilter:'blur(22px)'}, back:{color:'#D4B87A',textDecoration:'none',fontSize:11,letterSpacing:2,textTransform:'uppercase'}, icon:{fontSize:38,textAlign:'center',margin:'22px 0 8px'}, title:{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(34px,6vw,54px)',fontWeight:400,textAlign:'center',margin:'0 0 10px'}, copy:{color:'rgba(255,255,255,.72)',textAlign:'center',lineHeight:1.6,margin:'0 0 30px'},
  grid:{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(230px,1fr))',gap:14}, field:{display:'block',marginBottom:15}, label:{display:'block',fontSize:10,letterSpacing:1.5,textTransform:'uppercase',marginBottom:7,color:'rgba(255,255,255,.86)'}, input:{width:'100%',boxSizing:'border-box',padding:'13px 15px',border:'1px solid rgba(255,255,255,.18)',borderRadius:8,background:'rgba(255,255,255,.1)',color:'#fff',font:'inherit'}, button:{width:'100%',padding:16,border:0,borderRadius:8,background:'#D4B87A',color:'#080604',fontWeight:800,textTransform:'uppercase',letterSpacing:1,cursor:'pointer'}, error:{padding:12,marginBottom:12,background:'rgba(239,68,68,.14)',color:'#fecaca',borderRadius:8}, success:{display:'grid',placeItems:'center',width:68,height:68,border:'2px solid #D4B87A',borderRadius:'50%',margin:'10px auto 20px',color:'#D4B87A',fontSize:30}
};
