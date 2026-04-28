// Project Data Layer
    // const projects = [{
    //     name: "Khata Digital",
    //     icon: "fa-wallet",
    //     desc: "Digital ledger for expense tracking.",
    //     link: "https://khata-digital.netlify.app/"
    //   },
    //   {
    //     name: "Gen Z AI",
    //     icon: "fa-robot",
    //     desc: "AI interaction platform with neural UI.",
    //     link: "https://gen-z-ai.netlify.app/"
    //   },
    //   {
    //     name: "Translator D",
    //     icon: "fa-language",
    //     desc: "Multi-dialect translation engine.",
    //     link: "https://translator-d.netlify.app/"
    //   },
    //   {
    //     name: "PDF World",
    //     icon: "fa-file-pdf",
    //     desc: "Document manipulation utility suite.",
    //     link: "https://pdf-world.netlify.app/"
    //   },
    //   {
    //     name: "Deep Market",
    //     icon: "fa-store",
    //     desc: "High-concurrency E-commerce core.",
    //     link: "https://deep-market.netlify.app/"
    //   },
    //   {
    //     name: "Smart Ledger Pro",
    //     icon: "fa-chart-line",
    //     desc: "Professional business accounting.",
    //     link: "https://smartledgerpro.netlify.app/"
    //   },
    //   {
    //     name: "Pica Deep",
    //     icon: "fa-image",
    //     desc: "High-res asset management system.",
    //     link: "https://pica-deep.netlify.app/"
    //   },
    //   {
    //     name: "Habit Tracker",
    //     icon: "fa-list-check",
    //     desc: "Behavioral analytics for students.",
    //     link: "https://habit-tracker-student.netlify.app/"
    //   }
    // ];
    // // Dynamic Loading
    // const grid = document.getElementById('portfolio');
    // projects.forEach(p => {
    //   grid.innerHTML += `
    //             <div class="card">
    //                 <i class="fa-solid ${p.icon}"></i>
    //                 <h3>${p.name}</h3>
    //                 <p>${p.desc}</p>
    //                 <a href="${p.link}" target="_blank" class="btn">ACCESS_MODULE</a>
    //             </div>
    //         `;
    // });
    // Typewriter Effect
    const text = ["Boang", "Igat", "Yawa"];
    let count = 0;
    let index = 0;
    let currentText = "";
    let letter = "";
    (function type() {
      if (count === text.length) count = 0;
      currentText = text[count];
      letter = currentText.slice(0, ++index);
      document.querySelector("#typewriter").textContent = letter;
      if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 2000);
      } else {
        setTimeout(type, 100);
      }
    }());
    // Matrix Background Logic
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#@&";
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    function draw() {
      ctx.fillStyle = 'rgba(3, 7, 18, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#00f0ff';
      ctx.font = fontSize + 'px monospace';
      for (let i = 0; i < drops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      }
    }
    setInterval(draw, 33);
    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });