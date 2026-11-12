import { motion, useInView, useReducedMotion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, MapPin } from 'lucide-react';
import { useRef, type CSSProperties } from 'react';
import { Button } from './button';
interface WordsPullUpProps { text: string; className?: string; showAsterisk?: boolean; style?: CSSProperties }
export function WordsPullUp({text,className='',showAsterisk=false,style}:WordsPullUpProps) {
 const ref=useRef<HTMLDivElement>(null); const visible=useInView(ref,{once:true}); const reduce=useReducedMotion();
 return <div ref={ref} className={`inline-flex flex-wrap ${className}`} style={style}>{text.split(' ').map((word,i,words)=><motion.span key={i} initial={reduce?false:{y:20,opacity:0}} animate={visible?{y:0,opacity:1}:{}} transition={{duration:.6,delay:i*.08,ease:[.16,1,.3,1]}} className="relative inline-block" style={{marginRight:i===words.length-1?0:'.25em'}}>{word}{showAsterisk&&i===words.length-1&&<span className="asterisk">*</span>}</motion.span>)}</div>;
}
export function WordsPullUpMultiStyle({segments,className='',style}:{segments:{text:string;className?:string}[];className?:string;style?:CSSProperties}) {return <div className={`flex flex-wrap ${className}`} style={style}>{segments.map((seg,i)=><WordsPullUp key={i} text={seg.text} className={seg.className}/>)}</div>;}
export function PrismaHero() {return <section className="hero" id="home" aria-label="Introduction">
 <div className="hero-top"><span className="eyebrow"><span className="status-dot"/> DEVOPS / PLATFORM ENGINEER</span><span className="location"><MapPin size={14} aria-hidden="true"/> USA</span></div>
 <div className="hero-middle"><div><p className="hero-intro">Infrastructure with intention.</p><h1><span>Build. Automate.</span><br/><span className="serif">Keep it running.</span></h1><p className="hero-description">I’m Mohammad Rumman. I build and maintain secure, scalable platforms — from enterprise OpenShift clusters to automated delivery pipelines.</p><div className="hero-actions"><Button asChild><a href="#projects">Explore my work <ArrowUpRight size={18}/></a></Button><a className="text-link" href={`${import.meta.env.BASE_URL}Rumman_CV.pdf`} download>Download resume <ArrowDown size={16}/></a></div></div>
 <div className="platform-art" aria-hidden="true"><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="platform-label label-top">AUTOMATE</div><div className="stack stack-back"/><div className="stack stack-mid"/><div className="stack stack-front"><span>MR<span className="lime">_</span></span></div><div className="platform-label label-bottom"><span className="status-dot"/> BUILT TO SCALE</div><span className="coordinate">PLATFORM / 01</span></div></div>
 <div className="hero-bottom"><h2><WordsPullUp text="Rumman" showAsterisk/></h2><a href="#about" className="scroll-link">A little further down <ArrowDown size={18}/></a></div>
 </section>;}
