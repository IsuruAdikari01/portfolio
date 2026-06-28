// SVG-based project illustration components

export const PetCareSVG = () => (
  <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="pg1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0a0a1e" />
        <stop offset="100%" stopColor="#0f1a2e" />
      </linearGradient>
      <linearGradient id="pg2" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#00d4ff" />
        <stop offset="100%" stopColor="#0099cc" />
      </linearGradient>
    </defs>
    <rect width="400" height="220" fill="url(#pg1)" rx="8" />
    {/* Header bar */}
    <rect x="0" y="0" width="400" height="36" fill="rgba(0,212,255,0.08)" rx="8" />
    <circle cx="16" cy="18" r="5" fill="#ff4444" opacity="0.7" />
    <circle cx="30" cy="18" r="5" fill="#ffaa00" opacity="0.7" />
    <circle cx="44" cy="18" r="5" fill="#00cc44" opacity="0.7" />
    <text x="80" y="22" fontSize="10" fill="#00d4ff" fontFamily="monospace" opacity="0.8">Pet Care System</text>
    {/* Sidebar */}
    <rect x="0" y="36" width="70" height="184" fill="rgba(0,212,255,0.04)" />
    {[60,85,110,135].map((y, i) => (
      <rect key={i} x="10" y={y} width="50" height="14" rx="3" fill={i===0 ? "rgba(0,212,255,0.2)" : "rgba(255,255,255,0.05)"} />
    ))}
    <text x="18" y="70" fontSize="7" fill="#00d4ff" opacity="0.8" fontFamily="monospace">🐾 Pets</text>
    <text x="18" y="95" fontSize="7" fill="rgba(255,255,255,0.4)" fontFamily="monospace">Adopt</text>
    <text x="18" y="120" fontSize="7" fill="rgba(255,255,255,0.4)" fontFamily="monospace">Users</text>
    <text x="18" y="145" fontSize="7" fill="rgba(255,255,255,0.4)" fontFamily="monospace">Reports</text>
    {/* Content */}
    <text x="85" y="60" fontSize="9" fill="white" opacity="0.7" fontFamily="monospace">Available Pets</text>
    {/* Pet cards */}
    {[0,1,2].map(i => (
      <g key={i}>
        <rect x={85 + i*107} y="68" width="98" height="72" rx="5" fill="rgba(255,255,255,0.04)" stroke="rgba(0,212,255,0.15)" strokeWidth="1" />
        <circle cx={134 + i*107} cy="90" r="14" fill={["rgba(0,212,255,0.2)","rgba(155,89,255,0.2)","rgba(0,255,136,0.2)"][i]} />
        <text x={134 + i*107} y="94" fontSize="12" textAnchor="middle" fontFamily="sans-serif">{["🐕","🐈","🐇"][i]}</text>
        <text x={134 + i*107} y="113" fontSize="7" fill="white" opacity="0.7" textAnchor="middle" fontFamily="monospace">{["Buddy","Luna","Snow"][i]}</text>
        <rect x={97 + i*107} y="120" width="74" height="12" rx="2" fill={["rgba(0,212,255,0.25)","rgba(155,89,255,0.25)","rgba(0,255,136,0.25)"][i]} />
        <text x={134 + i*107} y="129" fontSize="7" fill={["#00d4ff","#9b59ff","#00ff88"][i]} textAnchor="middle" fontFamily="monospace">Adopt Now</text>
      </g>
    ))}
    {/* Bottom stats */}
    {[['24','Active Pets'],['8','Adoptions'],['156','Users']].map(([v,l],i) => (
      <g key={i}>
        <rect x={85 + i*107} y="150" width="98" height="50" rx="5" fill="rgba(255,255,255,0.03)" />
        <text x={134 + i*107} y="172" fontSize="14" fill="#00d4ff" fontFamily="monospace" fontWeight="bold" textAnchor="middle">{v}</text>
        <text x={134 + i*107} y="187" fontSize="7" fill="rgba(255,255,255,0.4)" textAnchor="middle" fontFamily="monospace">{l}</text>
      </g>
    ))}
  </svg>
);

export const CanteenSVG = () => (
  <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="cg1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0d0a1e" />
        <stop offset="100%" stopColor="#1a0a2e" />
      </linearGradient>
    </defs>
    <rect width="400" height="220" fill="url(#cg1)" rx="8" />
    <rect x="0" y="0" width="400" height="36" fill="rgba(155,89,255,0.08)" rx="8" />
    <circle cx="16" cy="18" r="5" fill="#ff4444" opacity="0.7" />
    <circle cx="30" cy="18" r="5" fill="#ffaa00" opacity="0.7" />
    <circle cx="44" cy="18" r="5" fill="#00cc44" opacity="0.7" />
    <text x="80" y="22" fontSize="10" fill="#9b59ff" fontFamily="monospace" opacity="0.8">Canteen Management</text>
    {/* Nav tabs */}
    {['Menu','Orders','Promos','Admin'].map((tab, i) => (
      <g key={tab}>
        <rect x={10 + i*95} y="44" width="88" height="20" rx="3" fill={i===0 ? "rgba(155,89,255,0.25)" : "rgba(255,255,255,0.04)"} />
        <text x={54 + i*95} y="57" fontSize="8" fill={i===0 ? "#9b59ff" : "rgba(255,255,255,0.4)"} textAnchor="middle" fontFamily="monospace">{tab}</text>
      </g>
    ))}
    {/* Food items grid */}
    {[
      {e:"🍕",n:"Pizza",p:"Rs.250",c:"rgba(155,89,255,0.2)"},
      {e:"🍔",n:"Burger",p:"Rs.180",c:"rgba(0,212,255,0.2)"},
      {e:"🍜",n:"Noodles",p:"Rs.150",c:"rgba(255,165,0,0.2)"},
      {e:"🥗",n:"Salad",p:"Rs.120",c:"rgba(0,255,136,0.2)"},
    ].map((item, i) => (
      <g key={i}>
        <rect x={10 + (i%4)*95} y={75 + Math.floor(i/4)*80} width="88" height="72" rx="5" fill="rgba(255,255,255,0.04)" stroke="rgba(155,89,255,0.15)" strokeWidth="1" />
        <rect x={10 + (i%4)*95} y={75 + Math.floor(i/4)*80} width="88" height="32" rx="5" fill={item.c} />
        <text x={54 + (i%4)*95} y={97 + Math.floor(i/4)*80} fontSize="16" textAnchor="middle">{item.e}</text>
        <text x={54 + (i%4)*95} y={122 + Math.floor(i/4)*80} fontSize="7.5" fill="white" opacity="0.8" textAnchor="middle" fontFamily="monospace">{item.n}</text>
        <text x={54 + (i%4)*95} y={135 + Math.floor(i/4)*80} fontSize="8" fill="#9b59ff" textAnchor="middle" fontFamily="monospace">{item.p}</text>
      </g>
    ))}
    {/* Cart indicator */}
    <rect x="340" y="50" width="52" height="28" rx="4" fill="rgba(155,89,255,0.3)" />
    <text x="366" y="66" fontSize="9" fill="#9b59ff" textAnchor="middle" fontFamily="monospace">🛒 3</text>
    {/* Promo badge */}
    <rect x="10" y="158" width="374" height="28" rx="4" fill="rgba(255,165,0,0.1)" stroke="rgba(255,165,0,0.2)" strokeWidth="1" />
    <text x="197" y="174" fontSize="8" fill="#ffa500" textAnchor="middle" fontFamily="monospace">🎉 PROMO: 20% off on all combo meals today!</text>
  </svg>
);

export const HealthSVG = () => (
  <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="hg1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#020e0a" />
        <stop offset="100%" stopColor="#050f14" />
      </linearGradient>
    </defs>
    <rect width="400" height="220" fill="url(#hg1)" rx="8" />
    {/* Phone frame */}
    <rect x="20" y="10" width="110" height="200" rx="12" fill="rgba(0,255,136,0.06)" stroke="rgba(0,255,136,0.2)" strokeWidth="1.5" />
    <rect x="44" y="14" width="62" height="8" rx="4" fill="rgba(0,255,136,0.2)" />
    {/* Mobile app UI */}
    <text x="75" y="38" fontSize="8" fill="#00ff88" textAnchor="middle" fontFamily="monospace">Health Monitor</text>
    <circle cx="75" cy="70" r="28" fill="none" stroke="rgba(0,255,136,0.15)" strokeWidth="8" />
    <circle cx="75" cy="70" r="28" fill="none" stroke="#00ff88" strokeWidth="8" strokeDasharray="105 175" strokeLinecap="round" transform="rotate(-90 75 70)" />
    <text x="75" y="66" fontSize="10" fill="white" textAnchor="middle" fontFamily="monospace">72</text>
    <text x="75" y="77" fontSize="7" fill="#00ff88" textAnchor="middle" fontFamily="monospace">BPM</text>
    {/* Mood row */}
    <text x="75" y="108" fontSize="7" fill="rgba(255,255,255,0.5)" textAnchor="middle" fontFamily="monospace">Today's Mood</text>
    {['😊','😐','😢','😡','🤩'].map((m, i) => (
      <text key={i} x={32 + i*18} y="124" fontSize="11" textAnchor="middle">{m}</text>
    ))}
    <circle cx="32" cy="120" r="9" fill="rgba(0,255,136,0.15)" stroke="#00ff88" strokeWidth="1" />
    {/* Steps */}
    <text x="75" y="142" fontSize="7" fill="rgba(255,255,255,0.4)" textAnchor="middle" fontFamily="monospace">Steps: 8,420 / 10,000</text>
    <rect x="30" y="148" width="90" height="5" rx="2" fill="rgba(255,255,255,0.1)" />
    <rect x="30" y="148" width="76" height="5" rx="2" fill="#00ff88" />
    {/* Sleep */}
    <rect x="27" y="162" width="96" height="28" rx="4" fill="rgba(0,255,136,0.08)" />
    <text x="75" y="173" fontSize="7" fill="rgba(255,255,255,0.5)" textAnchor="middle" fontFamily="monospace">Sleep: 7.5h</text>
    <text x="75" y="184" fontSize="7" fill="#00ff88" textAnchor="middle" fontFamily="monospace">😴 Good</text>
    {/* Dashboard charts */}
    <text x="180" y="24" fontSize="9" fill="rgba(255,255,255,0.7)" fontFamily="monospace">Health Overview</text>
    <text x="360" y="24" fontSize="8" fill="#00ff88" fontFamily="monospace" textAnchor="end">Week</text>
    {/* Heart rate chart */}
    <rect x="145" y="30" width="245" height="80" rx="5" fill="rgba(0,255,136,0.04)" stroke="rgba(0,255,136,0.1)" strokeWidth="1" />
    <text x="155" y="44" fontSize="7" fill="rgba(255,255,255,0.4)" fontFamily="monospace">Heart Rate</text>
    {/* Chart line */}
    <polyline
      points="155,85 175,72 195,78 215,65 235,70 255,60 275,68 295,55 315,63 335,58 365,65"
      stroke="#00ff88" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"
    />
    <polyline
      points="155,100 155,85 175,72 195,78 215,65 235,70 255,60 275,68 295,55 315,63 335,58 365,65 365,100"
      fill="rgba(0,255,136,0.06)"
    />
    {/* Bottom metrics */}
    {[['🔥','Calories','1840 kcal','rgba(255,100,0,0.2)'],['💧','Water','6 / 8 glasses','rgba(0,180,255,0.2)'],['🏃','Activity','45 min','rgba(155,89,255,0.2)']].map(([e,l,v,c],i) => (
      <g key={i}>
        <rect x={145 + i*82} y="120" width="76" height="60" rx="5" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
        <text x={183 + i*82} y="140" fontSize="16" textAnchor="middle">{e}</text>
        <text x={183 + i*82} y="155" fontSize="7" fill="rgba(255,255,255,0.4)" textAnchor="middle" fontFamily="monospace">{l}</text>
        <text x={183 + i*82} y="168" fontSize="7.5" fill="#00ff88" textAnchor="middle" fontFamily="monospace">{v}</text>
      </g>
    ))}
    {/* Stress chart area */}
    <rect x="145" y="190" width="245" height="22" rx="4" fill="rgba(0,255,136,0.06)" />
    <text x="268" y="204" fontSize="7.5" fill="rgba(255,255,255,0.4)" textAnchor="middle" fontFamily="monospace">Stress Level: Low ✅  |  HRV: 48ms  |  SpO2: 98%</text>
  </svg>
);

export const AdsSVG = () => (
  <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="ag1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1a020d" />
        <stop offset="100%" stopColor="#0a020d" />
      </linearGradient>
    </defs>
    <rect width="400" height="220" fill="url(#ag1)" rx="8" />
    <rect x="0" y="0" width="400" height="34" fill="rgba(255,45,120,0.08)" rx="8" />
    <circle cx="16" cy="17" r="5" fill="#ff4444" opacity="0.7" />
    <circle cx="30" cy="17" r="5" fill="#ffaa00" opacity="0.7" />
    <circle cx="44" cy="17" r="5" fill="#00cc44" opacity="0.7" />
    <text x="80" y="21" fontSize="10" fill="#ff2d78" fontFamily="monospace" opacity="0.8">Ad Agency Dashboard</text>
    {/* KPI row */}
    {[['$24.8K','Revenue','+18%'],['142K','Impressions','+32%'],['4.8%','Click Rate','+0.6%'],['38','Campaigns','Active']].map(([v,l,c],i) => (
      <g key={i}>
        <rect x={4 + i*99} y="42" width="92" height="48" rx="4" fill="rgba(255,255,255,0.04)" stroke="rgba(255,45,120,0.12)" strokeWidth="1" />
        <text x={50 + i*99} y="60" fontSize="12" fill="white" fontWeight="bold" textAnchor="middle" fontFamily="monospace">{v}</text>
        <text x={50 + i*99} y="72" fontSize="7" fill="rgba(255,255,255,0.4)" textAnchor="middle" fontFamily="monospace">{l}</text>
        <text x={50 + i*99} y="83" fontSize="7" fill="#00ff88" textAnchor="middle" fontFamily="monospace">{c}</text>
      </g>
    ))}
    {/* Chart */}
    <rect x="4" y="98" width="240" height="80" rx="5" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
    <text x="14" y="112" fontSize="7.5" fill="rgba(255,255,255,0.5)" fontFamily="monospace">Campaign Performance</text>
    {[0,1,2,3,4,5,6].map(i => {
      const heights = [38,54,42,62,50,72,58];
      const y = 170 - heights[i];
      return (
        <g key={i}>
          <rect x={20 + i*30} y={y} width="18" height={heights[i]} rx="2" fill="rgba(255,45,120,0.3)" />
          <rect x={20 + i*30} y={y} width="18" height={heights[i] * 0.4} rx="2" fill="rgba(255,45,120,0.6)" />
          <text x={29 + i*30} y="178" fontSize="6" fill="rgba(255,255,255,0.3)" textAnchor="middle" fontFamily="monospace">{['M','T','W','T','F','S','S'][i]}</text>
        </g>
      );
    })}
    {/* Right panel */}
    <rect x="252" y="98" width="144" height="80" rx="5" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
    <text x="262" y="112" fontSize="7.5" fill="rgba(255,255,255,0.5)" fontFamily="monospace">Top Campaigns</text>
    {[['Brand Awareness','68%'],['Product Launch','52%'],['Retargeting','81%']].map(([n,p],i) => (
      <g key={i}>
        <text x="262" y={128 + i*18} fontSize="7" fill="rgba(255,255,255,0.6)" fontFamily="monospace">{n}</text>
        <rect x="262" y={130 + i*18} width="120" height="5" rx="2" fill="rgba(255,255,255,0.08)" />
        <rect x="262" y={130 + i*18} width={120 * parseInt(p)/100} height="5" rx="2" fill="#ff2d78" />
        <text x="387" y={135 + i*18} fontSize="6.5" fill="#ff2d78" textAnchor="end" fontFamily="monospace">{p}</text>
      </g>
    ))}
    {/* Bottom */}
    <rect x="4" y="185" width="392" height="28" rx="4" fill="rgba(255,45,120,0.06)" />
    {['Display','Social','Search','Video','Email'].map((t,i) => (
      <g key={i}>
        <rect x={14 + i*76} y="190" width="70" height="16" rx="3" fill={i===1 ? "rgba(255,45,120,0.25)" : "rgba(255,255,255,0.04)"} />
        <text x={49 + i*76} y="200.5" fontSize="7" fill={i===1 ? "#ff2d78" : "rgba(255,255,255,0.4)"} textAnchor="middle" fontFamily="monospace">{t}</text>
      </g>
    ))}
  </svg>
);

export const TourSVG = () => (
  <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="tg1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#020d14" />
        <stop offset="100%" stopColor="#0a0a06" />
      </linearGradient>
      <linearGradient id="sky" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#0a1a2e" />
        <stop offset="100%" stopColor="#1a2a0e" />
      </linearGradient>
    </defs>
    <rect width="400" height="220" fill="url(#tg1)" rx="8" />
    {/* Hero banner */}
    <rect x="0" y="0" width="400" height="90" fill="url(#sky)" rx="8" />
    <text x="200" y="26" fontSize="13" fill="white" fontWeight="bold" textAnchor="middle" fontFamily="monospace">Explore Sri Lanka 🌴</text>
    <text x="200" y="40" fontSize="8" fill="rgba(255,255,255,0.5)" textAnchor="middle" fontFamily="monospace">Discover breathtaking destinations with expert guides</text>
    {/* Search bar */}
    <rect x="60" y="50" width="280" height="22" rx="11" fill="rgba(255,255,255,0.12)" stroke="rgba(255,165,0,0.3)" strokeWidth="1" />
    <text x="110" y="64" fontSize="8" fill="rgba(255,255,255,0.4)" fontFamily="monospace">🔍  Where do you want to go?</text>
    <rect x="290" y="53" width="44" height="16" rx="8" fill="rgba(255,165,0,0.4)" />
    <text x="312" y="64" fontSize="7.5" fill="white" textAnchor="middle" fontFamily="monospace">Search</text>
    {/* Nav */}
    <rect x="0" y="90" width="400" height="26" fill="rgba(255,255,255,0.04)" />
    {['Home','Destinations','Guides','Bookings','About'].map((n, i) => (
      <text key={n} x={28 + i*72} y="106" fontSize="7.5" fill={i===1 ? "#ffa500" : "rgba(255,255,255,0.4)"} fontFamily="monospace">{n}</text>
    ))}
    {/* Destination cards */}
    {[
      {name:'Sigiriya',color:'rgba(255,165,0,0.15)',e:'🏯',r:'4.9'},
      {name:'Galle Fort',color:'rgba(0,212,255,0.15)',e:'🏰',r:'4.7'},
      {name:'Kandy',color:'rgba(0,255,136,0.15)',e:'🏛️',r:'4.8'},
      {name:'Ella',color:'rgba(155,89,255,0.15)',e:'🏔️',r:'4.9'},
    ].map((dest, i) => (
      <g key={i}>
        <rect x={4 + i*99} y="122" width="92" height="70" rx="5" fill={dest.color} stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
        <text x={50 + i*99} y="148" fontSize="20" textAnchor="middle">{dest.e}</text>
        <text x={50 + i*99} y="162" fontSize="8" fill="white" opacity="0.8" textAnchor="middle" fontFamily="monospace">{dest.name}</text>
        <text x={50 + i*99} y="174" fontSize="7" fill="#ffa500" textAnchor="middle" fontFamily="monospace">⭐ {dest.r}</text>
        <rect x={15 + i*99} y="180" width="62" height="9" rx="2" fill="rgba(255,165,0,0.3)" />
        <text x={46 + i*99} y="187" fontSize="6.5" fill="white" textAnchor="middle" fontFamily="monospace">Book Now</text>
      </g>
    ))}
    {/* Bottom status */}
    <rect x="4" y="198" width="392" height="16" rx="3" fill="rgba(255,165,0,0.06)" />
    <text x="200" y="208" fontSize="7" fill="rgba(255,165,0,0.6)" textAnchor="middle" fontFamily="monospace">🗺️ 50+ Destinations  •  🎯 Expert Guides  •  ✅ Instant Booking  •  ⭐ 4.8 Avg Rating</text>
  </svg>
);
