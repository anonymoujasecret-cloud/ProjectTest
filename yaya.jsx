<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mirza - Bocah SMP Full Stack Developer & Cybersecurity</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Roboto+Mono:wght@300;400;500&display=swap" rel="stylesheet">
    <style>
        :root {
            --primary: #6C63FF;
            --primary-dark: #5752D4;
            --secondary: #FF6584;
            --dark: #2A2D3E;
            --darker: #212431;
            --light: #F5F5F7;
            --gray: #8A8D9F;
            --success: #4CAF50;
            --warning: #FFC107;
            --danger: #F44336;
            --transition: all 0.3s ease;
            --shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            --shadow-hover: 0 15px 40px rgba(0, 0, 0, 0.15);
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        html {
            scroll-behavior: smooth;
        }

        body {
            font-family: 'Poppins', sans-serif;
            line-height: 1.6;
            color: var(--dark);
            background-color: var(--light);
            overflow-x: hidden;
        }

        h1, h2, h3, h4, h5, h6 {
            font-weight: 600;
            line-height: 1.2;
            margin-bottom: 1rem;
        }

        p {
            margin-bottom: 1rem;
        }

        a {
            text-decoration: none;
            color: inherit;
        }

        ul {
            list-style: none;
        }

        img {
            max-width: 100%;
            height: auto;
        }

        .container {
            width: 90%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 15px;
        }

        .section {
            padding: 100px 0;
        }

        .section-title {
            font-size: 2.5rem;
            text-align: center;
            margin-bottom: 3rem;
            position: relative;
        }

        .section-title::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 4px;
            background: var(--primary);
            border-radius: 2px;
        }

        .btn {
            display: inline-block;
            padding: 12px 30px;
            background: var(--primary);
            color: white;
            border-radius: 50px;
            font-weight: 500;
            transition: var(--transition);
            border: none;
            cursor: pointer;
            font-size: 1rem;
            box-shadow: var(--shadow);
        }

        .btn:hover {
            background: var(--primary-dark);
            transform: translateY(-3px);
            box-shadow: var(--shadow-hover);
        }

        .btn-outline {
            background: transparent;
            border: 2px solid var(--primary);
            color: var(--primary);
        }

        .btn-outline:hover {
            background: var(--primary);
            color: white;
        }

        /* Header & Navigation */
        header {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 1000;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            transition: var(--transition);
        }

        header.scrolled {
            padding: 10px 0;
            background: rgba(255, 255, 255, 0.98);
        }

        .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 0;
        }

        .logo {
            font-size: 1.8rem;
            font-weight: 700;
            color: var(--primary);
            display: flex;
            align-items: center;
        }

        .logo i {
            margin-right: 10px;
        }

        .nav-links {
            display: flex;
        }

        .nav-links li {
            margin-left: 30px;
        }

        .nav-links a {
            font-weight: 500;
            position: relative;
            transition: var(--transition);
        }

        .nav-links a::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 0;
            height: 2px;
            background: var(--primary);
            transition: var(--transition);
        }

        .nav-links a:hover {
            color: var(--primary);
        }

        .nav-links a:hover::after {
            width: 100%;
        }

        .hamburger {
            display: none;
            cursor: pointer;
            font-size: 1.5rem;
        }

        /* Hero Section */
        .hero {
            min-height: 100vh;
            display: flex;
            align-items: center;
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
            position: relative;
            overflow: hidden;
        }

        .hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" opacity="0.05"><polygon fill="%236C63FF" points="0,0 1000,0 1000,1000"/></svg>');
            background-size: cover;
        }

        .hero-content {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
        }

        .hero-text {
            flex: 1;
            max-width: 600px;
            z-index: 1;
        }

        .hero-image {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1;
        }

        .hero-image img {
            max-width: 400px;
            border-radius: 50%;
            box-shadow: var(--shadow-hover);
            animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
            0% {
                transform: translateY(0px);
            }
            50% {
                transform: translateY(-20px);
            }
            100% {
                transform: translateY(0px);
            }
        }

        .hero-title {
            font-size: 3.5rem;
            margin-bottom: 1rem;
            line-height: 1.1;
        }

        .hero-subtitle {
            font-size: 1.5rem;
            color: var(--gray);
            margin-bottom: 2rem;
        }

        .hero-description {
            font-size: 1.1rem;
            margin-bottom: 2.5rem;
            color: var(--dark);
        }

        .hero-btns {
            display: flex;
            gap: 15px;
        }

        .social-links {
            display: flex;
            gap: 15px;
            margin-top: 2rem;
        }

        .social-links a {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 45px;
            height: 45px;
            background: white;
            border-radius: 50%;
            color: var(--dark);
            box-shadow: var(--shadow);
            transition: var(--transition);
        }

        .social-links a:hover {
            transform: translateY(-5px);
            color: var(--primary);
        }

        /* About Section */
        .about {
            background: white;
        }

        .about-content {
            display: flex;
            align-items: center;
            gap: 50px;
        }

        .about-image {
            flex: 1;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: var(--shadow);
        }

        .about-image img {
            width: 100%;
            height: auto;
            transition: var(--transition);
        }

        .about-image:hover img {
            transform: scale(1.05);
        }

        .about-text {
            flex: 1;
        }

        .about-text h2 {
            font-size: 2.5rem;
            margin-bottom: 1.5rem;
        }

        .about-text p {
            margin-bottom: 1.5rem;
            color: var(--gray);
        }

        .about-stats {
            display: flex;
            gap: 30px;
            margin-top: 2rem;
        }

        .stat {
            text-align: center;
        }

        .stat-number {
            font-size: 2.5rem;
            font-weight: 700;
            color: var(--primary);
            display: block;
        }

        .stat-label {
            font-size: 0.9rem;
            color: var(--gray);
        }

        /* Skills Section */
        .skills {
            background: var(--darker);
            color: white;
        }

        .skills .section-title {
            color: white;
        }

        .skills-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
        }

        .skill-category {
            background: var(--dark);
            padding: 30px;
            border-radius: 15px;
            box-shadow: var(--shadow);
            transition: var(--transition);
        }

        .skill-category:hover {
            transform: translateY(-10px);
            box-shadow: var(--shadow-hover);
        }

        .skill-category h3 {
            font-size: 1.5rem;
            margin-bottom: 1.5rem;
            display: flex;
            align-items: center;
        }

        .skill-category h3 i {
            margin-right: 10px;
            color: var(--primary);
        }

        .skill-item {
            margin-bottom: 20px;
        }

        .skill-header {
            display: flex;
            justify-content: space-between;
            margin-bottom: 8px;
        }

        .skill-name {
            font-weight: 500;
        }

        .skill-percentage {
            color: var(--primary);
            font-weight: 500;
        }

        .skill-bar {
            height: 8px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 4px;
            overflow: hidden;
        }

        .skill-progress {
            height: 100%;
            background: var(--primary);
            border-radius: 4px;
            width: 0;
            transition: width 1.5s ease;
        }

        /* Projects Section */
        .projects {
            background: white;
        }

        .projects-filter {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 10px;
            margin-bottom: 3rem;
        }

        .filter-btn {
            padding: 8px 20px;
            background: transparent;
            border: 1px solid var(--gray);
            border-radius: 50px;
            cursor: pointer;
            transition: var(--transition);
        }

        .filter-btn.active, .filter-btn:hover {
            background: var(--primary);
            color: white;
            border-color: var(--primary);
        }

        .projects-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
            gap: 30px;
        }

        .project-card {
            border-radius: 15px;
            overflow: hidden;
            box-shadow: var(--shadow);
            transition: var(--transition);
            background: white;
        }

        .project-card:hover {
            transform: translateY(-10px);
            box-shadow: var(--shadow-hover);
        }

        .project-image {
            height: 200px;
            overflow: hidden;
            position: relative;
        }

        .project-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: var(--transition);
        }

        .project-card:hover .project-image img {
            transform: scale(1.1);
        }

        .project-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(108, 99, 255, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: var(--transition);
        }

        .project-card:hover .project-overlay {
            opacity: 1;
        }

        .project-links {
            display: flex;
            gap: 15px;
        }

        .project-link {
            width: 45px;
            height: 45px;
            background: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--primary);
            transition: var(--transition);
        }

        .project-link:hover {
            transform: scale(1.1);
            background: var(--primary);
            color: white;
        }

        .project-content {
            padding: 20px;
        }

        .project-category {
            display: inline-block;
            padding: 5px 15px;
            background: rgba(108, 99, 255, 0.1);
            color: var(--primary);
            border-radius: 50px;
            font-size: 0.8rem;
            margin-bottom: 10px;
        }

        .project-title {
            font-size: 1.3rem;
            margin-bottom: 10px;
        }

        .project-description {
            color: var(--gray);
            font-size: 0.9rem;
        }

        /* Contact Section */
        .contact {
            background: var(--darker);
            color: white;
        }

        .contact .section-title {
            color: white;
        }

        .contact-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 50px;
        }

        .contact-info {
            display: flex;
            flex-direction: column;
            gap: 25px;
        }

        .contact-item {
            display: flex;
            align-items: flex-start;
            gap: 15px;
        }

        .contact-icon {
            width: 50px;
            height: 50px;
            background: var(--primary);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
        }

        .contact-details h3 {
            font-size: 1.2rem;
            margin-bottom: 5px;
        }

        .contact-details p {
            color: var(--gray);
            margin-bottom: 0;
        }

        .contact-form {
            background: var(--dark);
            padding: 30px;
            border-radius: 15px;
            box-shadow: var(--shadow);
        }

        .form-group {
            margin-bottom: 20px;
        }

        .form-control {
            width: 100%;
            padding: 15px;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 8px;
            color: white;
            font-family: 'Poppins', sans-serif;
            transition: var(--transition);
        }

        .form-control:focus {
            outline: none;
            border-color: var(--primary);
        }

        textarea.form-control {
            min-height: 150px;
            resize: vertical;
        }

        /* Footer */
        footer {
            background: var(--darker);
            color: white;
            padding: 50px 0 20px;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .footer-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
        }

        .footer-logo {
            font-size: 2rem;
            font-weight: 700;
            color: var(--primary);
            margin-bottom: 1.5rem;
        }

        .footer-links {
            display: flex;
            gap: 30px;
            margin-bottom: 2rem;
        }

        .footer-links a {
            transition: var(--transition);
        }

        .footer-links a:hover {
            color: var(--primary);
        }

        .footer-social {
            display: flex;
            gap: 15px;
            margin-bottom: 2rem;
        }

        .footer-social a {
            width: 40px;
            height: 40px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: var(--transition);
        }

        .footer-social a:hover {
            background: var(--primary);
            transform: translateY(-5px);
        }

        .copyright {
            color: var(--gray);
            font-size: 0.9rem;
            padding-top: 20px;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            width: 100%;
        }

        /* Animations */
        .fade-in {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .fade-in.visible {
            opacity: 1;
            transform: translateY(0);
        }

        /* Media Queries */
        @media (max-width: 992px) {
            .hero-content {
                flex-direction: column;
                text-align: center;
            }

            .hero-text {
                margin-bottom: 50px;
            }

            .about-content {
                flex-direction: column;
            }

            .hero-btns, .social-links {
                justify-content: center;
            }
        }

        @media (max-width: 768px) {
            .navbar {
                padding: 15px 0;
            }

            .nav-links {
                position: fixed;
                top: 80px;
                left: -100%;
                width: 100%;
                height: calc(100vh - 80px);
                background: white;
                flex-direction: column;
                align-items: center;
                justify-content: flex-start;
                padding-top: 50px;
                transition: var(--transition);
                box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
            }

            .nav-links.active {
                left: 0;
            }

            .nav-links li {
                margin: 15px 0;
            }

            .hamburger {
                display: block;
            }

            .hero-title {
                font-size: 2.5rem;
            }

            .section-title {
                font-size: 2rem;
            }

            .about-stats {
                flex-wrap: wrap;
                justify-content: center;
            }

            .footer-links {
                flex-wrap: wrap;
                justify-content: center;
            }
        }

        @media (max-width: 576px) {
            .hero-title {
                font-size: 2rem;
            }

            .hero-subtitle {
                font-size: 1.2rem;
            }

            .section {
                padding: 70px 0;
            }

            .projects-grid {
                grid-template-columns: 1fr;
            }

            .contact-container {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <!-- Header & Navigation -->
    <header id="header">
        <div class="container">
            <nav class="navbar">
                <a href="#" class="logo"><i class="fas fa-code"></i>Mirza</a>
                <ul class="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">Tentang</a></li>
                    <li><a href="#skills">Keahlian</a></li>
                    <li><a href="#projects">Proyek</a></li>
                    <li><a href="#contact">Kontak</a></li>
                </ul>
                <div class="hamburger">
                    <i class="fas fa-bars"></i>
                </div>
            </nav>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="hero" id="home">
        <div class="container">
            <div class="hero-content">
                <div class="hero-text">
                    <h1 class="hero-title fade-in">Halo, Saya <span style="color: var(--primary);">Mirza</span></h1>
                    <h2 class="hero-subtitle fade-in">Bocah SMP Full Stack Developer & Cybersecurity Enthusiast</h2>
                    <p class="hero-description fade-in">
                        Saya seorang siswa SMP yang memiliki passion dalam pengembangan web dan keamanan siber. 
                        Saya senang menciptakan solusi digital yang inovatif dan aman.
                    </p>
                    <div class="hero-btns fade-in">
                        <a href="#projects" class="btn">Lihat Proyek</a>
                        <a href="#contact" class="btn btn-outline">Hubungi Saya</a>
                    </div>
                    <div class="social-links fade-in">
                        <a href="#"><i class="fab fa-github"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-linkedin"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                    </div>
                </div>
                <div class="hero-image fade-in">
                    <img src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" alt="Mirza">
                </div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section class="section about" id="about">
        <div class="container">
            <h2 class="section-title fade-in">Tentang Saya</h2>
            <div class="about-content">
                <div class="about-image fade-in">
                    <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" alt="Tentang Mirza">
                </div>
                <div class="about-text fade-in">
                    <h2>Cerita Singkat Tentang Perjalanan Saya</h2>
                    <p>
                        Saya mulai tertarik dengan pemrograman sejak usia 12 tahun. Awalnya saya hanya bermain-main dengan HTML dan CSS, 
                        tetapi seiring waktu, ketertarikan saya berkembang ke JavaScript, Node.js, React, dan berbagai teknologi lainnya.
                    </p>
                    <p>
                        Selain pengembangan web, saya juga sangat tertarik dengan keamanan siber. Saya senang mempelajari cara kerja 
                        berbagai jenis serangan siber dan bagaimana cara mencegahnya. Saya percaya bahwa di era digital ini, 
                        keamanan informasi adalah hal yang sangat penting.
                    </p>
                    <p>
                        Meskipun masih berstatus sebagai siswa SMP, saya telah menyelesaikan beberapa proyek untuk klien dan 
                        mengikuti berbagai kompetisi coding. Saya selalu bersemangat untuk belajar hal-hal baru dan 
                        meningkatkan kemampuan saya.
                    </p>
                    <div class="about-stats">
                        <div class="stat">
                            <span class="stat-number" data-count="15">0</span>
                            <span class="stat-label">Proyek Selesai</span>
                        </div>
                        <div class="stat">
                            <span class="stat-number" data-count="3">0</span>
                            <span class="stat-label">Penghargaan</span>
                        </div>
                        <div class="stat">
                            <span class="stat-number" data-count="2">0</span>
                            <span class="stat-label">Tahun Pengalaman</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Skills Section -->
    <section class="section skills" id="skills">
        <div class="container">
            <h2 class="section-title fade-in">Keahlian Saya</h2>
            <div class="skills-container">
                <div class="skill-category fade-in">
                    <h3><i class="fas fa-laptop-code"></i> Frontend Development</h3>
                    <div class="skill-item">
                        <div class="skill-header">
                            <span class="skill-name">HTML & CSS</span>
                            <span class="skill-percentage">95%</span>
                        </div>
                        <div class="skill-bar">
                            <div class="skill-progress" data-width="95"></div>
                        </div>
                    </div>
                    <div class="skill-item">
                        <div class="skill-header">
                            <span class="skill-name">JavaScript</span>
                            <span class="skill-percentage">90%</span>
                        </div>
                        <div class="skill-bar">
                            <div class="skill-progress" data-width="90"></div>
                        </div>
                    </div>
                    <div class="skill-item">
                        <div class="skill-header">
                            <span class="skill-name">React</span>
                            <span class="skill-percentage">85%</span>
                        </div>
                        <div class="skill-bar">
                            <div class="skill-progress" data-width="85"></div>
                        </div>
                    </div>
                    <div class="skill-item">
                        <div class="skill-header">
                            <span class="skill-name">Vue.js</span>
                            <span class="skill-percentage">80%</span>
                        </div>
                        <div class="skill-bar">
                            <div class="skill-progress" data-width="80"></div>
                        </div>
                    </div>
                </div>

                <div class="skill-category fade-in">
                    <h3><i class="fas fa-server"></i> Backend Development</h3>
                    <div class="skill-item">
                        <div class="skill-header">
                            <span class="skill-name">Node.js</span>
                            <span class="skill-percentage">88%</span>
                        </div>
                        <div class="skill-bar">
                            <div class="skill-progress" data-width="88"></div>
                        </div>
                    </div>
                    <div class="skill-item">
                        <div class="skill-header">
                            <span class="skill-name">Express.js</span>
                            <span class="skill-percentage">85%</span>
                        </div>
                        <div class="skill-bar">
                            <div class="skill-progress" data-width="85"></div>
                        </div>
                    </div>
                    <div class="skill-item">
                        <div class="skill-header">
                            <span class="skill-name">MongoDB</span>
                            <span class="skill-percentage">82%</span>
                        </div>
                        <div class="skill-bar">
                            <div class="skill-progress" data-width="82"></div>
                        </div>
                    </div>
                    <div class="skill-item">
                        <div class="skill-header">
                            <span class="skill-name">MySQL</span>
                            <span class="skill-percentage">80%</span>
                        </div>
                        <div class="skill-bar">
                            <div class="skill-progress" data-width="80"></div>
                        </div>
                    </div>
                </div>

                <div class="skill-category fade-in">
                    <h3><i class="fas fa-shield-alt"></i> Cybersecurity</h3>
                    <div class="skill-item">
                        <div class="skill-header">
                            <span class="skill-name">Penetration Testing</span>
                            <span class="skill-percentage">85%</span>
                        </div>
                        <div class="skill-bar">
                            <div class="skill-progress" data-width="85"></div>
                        </div>
                    </div>
                    <div class="skill-item">
                        <div class="skill-header">
                            <span class="skill-name">Network Security</span>
                            <span class="skill-percentage">80%</span>
                        </div>
                        <div class="skill-bar">
                            <div class="skill-progress" data-width="80"></div>
                        </div>
                    </div>
                    <div class="skill-item">
                        <div class="skill-header">
                            <span class="skill-name">Web Application Security</span>
                            <span class="skill-percentage">90%</span>
                        </div>
                        <div class="skill-bar">
                            <div class="skill-progress" data-width="90"></div>
                        </div>
                    </div>
                    <div class="skill-item">
                        <div class="skill-header">
                            <span class="skill-name">Cryptography</span>
                            <span class="skill-percentage">75%</span>
                        </div>
                        <div class="skill-bar">
                            <div class="skill-progress" data-width="75"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Projects Section -->
    <section class="section projects" id="projects">
        <div class="container">
            <h2 class="section-title fade-in">Proyek Saya</h2>
            <div class="projects-filter fade-in">
                <button class="filter-btn active" data-filter="all">Semua</button>
                <button class="filter-btn" data-filter="web">Web Development</button>
                <button class="filter-btn" data-filter="cyber">Cybersecurity</button>
                <button class="filter-btn" data-filter="mobile">Mobile App</button>
            </div>
            <div class="projects-grid">
                <div class="project-card fade-in" data-category="web">
                    <div class="project-image">
                        <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" alt="E-commerce Website">
                        <div class="project-overlay">
                            <div class="project-links">
                                <a href="#" class="project-link"><i class="fas fa-external-link-alt"></i></a>
                                <a href="#" class="project-link"><i class="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="project-content">
                        <span class="project-category">Web Development</span>
                        <h3 class="project-title">E-commerce Platform</h3>
                        <p class="project-description">
                            Platform e-commerce lengkap dengan sistem pembayaran, keranjang belanja, dan dashboard admin.
                        </p>
                    </div>
                </div>

                <div class="project-card fade-in" data-category="cyber">
                    <div class="project-image">
                        <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" alt="Security Scanner">
                        <div class="project-overlay">
                            <div class="project-links">
                                <a href="#" class="project-link"><i class="fas fa-external-link-alt"></i></a>
                                <a href="#" class="project-link"><i class="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="project-content">
                        <span class="project-category">Cybersecurity</span>
                        <h3 class="project-title">Web Vulnerability Scanner</h3>
                        <p class="project-description">
                            Alat untuk memindai kerentanan keamanan pada aplikasi web seperti SQL injection dan XSS.
                        </p>
                    </div>
                </div>

                <div class="project-card fade-in" data-category="web">
                    <div class="project-image">
                        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" alt="Task Management App">
                        <div class="project-overlay">
                            <div class="project-links">
                                <a href="#" class="project-link"><i class="fas fa-external-link-alt"></i></a>
                                <a href="#" class="project-link"><i class="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="project-content">
                        <span class="project-category">Web Development</span>
                        <h3 class="project-title">Task Management App</h3>
                        <p class="project-description">
                            Aplikasi manajemen tugas dengan fitur kolaborasi tim, notifikasi, dan pelacakan progres.
                        </p>
                    </div>
                </div>

                <div class="project-card fade-in" data-category="mobile">
                    <div class="project-image">
                        <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" alt="Fitness Tracker">
                        <div class="project-overlay">
                            <div class="project-links">
                                <a href="#" class="project-link"><i class="fas fa-external-link-alt"></i></a>
                                <a href="#" class="project-link"><i class="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="project-content">
                        <span class="project-category">Mobile App</span>
                        <h3 class="project-title">Fitness Tracker App</h3>
                        <p class="project-description">
                            Aplikasi mobile untuk melacak aktivitas kebugaran, pola makan, dan progres latihan.
                        </p>
                    </div>
                </div>

                <div class="project-card fade-in" data-category="cyber">
                    <div class="project-image">
                        <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" alt="Password Manager">
                        <div class="project-overlay">
                            <div class="project-links">
                                <a href="#" class="project-link"><i class="fas fa-external-link-alt"></i></a>
                                <a href="#" class="project-link"><i class="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="project-content">
                        <span class="project-category">Cybersecurity</span>
                        <h3 class="project-title">Secure Password Manager</h3>
                        <p class="project-description">
                            Manajer kata sandi yang aman dengan enkripsi end-to-end dan generator kata sandi kuat.
                        </p>
                    </div>
                </div>

                <div class="project-card fade-in" data-category="web">
                    <div class="project-image">
                        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" alt="Blog Platform">
                        <div class="project-overlay">
                            <div class="project-links">
                                <a href="#" class="project-link"><i class="fas fa-external-link-alt"></i></a>
                                <a href="#" class="project-link"><i class="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="project-content">
                        <span class="project-category">Web Development</span>
                        <h3 class="project-title">Personal Blog Platform</h3>
                        <p class="project-description">
                            Platform blog pribadi dengan sistem manajemen konten, komentar, dan integrasi media sosial.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section class="section contact" id="contact">
        <div class="container">
            <h2 class="section-title fade-in">Hubungi Saya</h2>
            <div class="contact-container">
                <div class="contact-info fade-in">
                    <div class="contact-item">
                        <div class="contact-icon">
                            <i class="fas fa-map-marker-alt"></i>
                        </div>
                        <div class="contact-details">
                            <h3>Lokasi</h3>
                            <p>Jakarta, Indonesia</p>
                        </div>
                    </div>
                    <div class="contact-item">
                        <div class="contact-icon">
                            <i class="fas fa-envelope"></i>
                        </div>
                        <div class="contact-details">
                            <h3>Email</h3>
                            <p>mirza.dev@example.com</p>
                        </div>
                    </div>
                    <div class="contact-item">
                        <div class="contact-icon">
                            <i class="fas fa-phone"></i>
                        </div>
                        <div class="contact-details">
                            <h3>Telepon</h3>
                            <p>+62 812 3456 7890</p>
                        </div>
                    </div>
                    <div class="contact-item">
                        <div class="contact-icon">
                            <i class="fas fa-globe"></i>
                        </div>
                        <div class="contact-details">
                            <h3>Website</h3>
                            <p>www.mirzadev.com</p>
                        </div>
                    </div>
                </div>
                <div class="contact-form fade-in">
                    <form id="contactForm">
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Nama Lengkap" required>
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-control" placeholder="Alamat Email" required>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Subjek" required>
                        </div>
                        <div class="form-group">
                            <textarea class="form-control" placeholder="Pesan Anda" required></textarea>
                        </div>
                        <button type="submit" class="btn">Kirim Pesan</button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="footer-content">
                <a href="#" class="footer-logo">Mirza</a>
                <ul class="footer-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">Tentang</a></li>
                    <li><a href="#skills">Keahlian</a></li>
                    <li><a href="#projects">Proyek</a></li>
                    <li><a href="#contact">Kontak</a></li>
                </ul>
                <div class="footer-social">
                    <a href="#"><i class="fab fa-github"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-linkedin"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                </div>
                <p class="copyright">&copy; 2023 Mirza. All Rights Reserved.</p>
            </div>
        </div>
    </footer>

    <script>
        // Mobile Navigation Toggle
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');

        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.querySelector('i').classList.toggle('fa-bars');
            hamburger.querySelector('i').classList.toggle('fa-times');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.querySelector('i').classList.add('fa-bars');
                hamburger.querySelector('i').classList.remove('fa-times');
            });
        });

        // Header scroll effect
        window.addEventListener('scroll', () => {
            const header = document.getElementById('header');
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Scroll animations
        const fadeElements = document.querySelectorAll('.fade-in');

        const fadeInOnScroll = () => {
            fadeElements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;
                
                if (elementTop < window.innerHeight - elementVisible) {
                    element.classList.add('visible');
                }
            });
        };

        window.addEventListener('scroll', fadeInOnScroll);
        fadeInOnScroll(); // Check on load

        // Project filtering
        const filterButtons = document.querySelectorAll('.filter-btn');
        const projectCards = document.querySelectorAll('.project-card');

        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                button.classList.add('active');
                
                const filterValue = button.getAttribute('data-filter');
                
                projectCards.forEach(card => {
                    if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });

        // Animate skill bars on scroll
        const skillBars = document.querySelectorAll('.skill-progress');

        const animateSkillBars = () => {
            skillBars.forEach(bar => {
                const barTop = bar.getBoundingClientRect().top;
                const barVisible = 100;
                
                if (barTop < window.innerHeight - barVisible) {
                    const width = bar.getAttribute('data-width');
                    bar.style.width = width + '%';
                }
            });
        };

        window.addEventListener('scroll', animateSkillBars);
        animateSkillBars(); // Check on load

        // Animate statistics counters
        const statNumbers = document.querySelectorAll('.stat-number');

        const animateCounters = () => {
            statNumbers.forEach(stat => {
                const statTop = stat.getBoundingClientRect().top;
                const statVisible = 100;
                
                if (statTop < window.innerHeight - statVisible && !stat.classList.contains('animated')) {
                    stat.classList.add('animated');
                    const target = parseInt(stat.getAttribute('data-count'));
                    const duration = 2000; // 2 seconds
                    const step = target / (duration / 16); // 60fps
                    let current = 0;
                    
                    const timer = setInterval(() => {
                        current += step;
                        if (current >= target) {
                            stat.textContent = target;
                            clearInterval(timer);
                        } else {
                            stat.textContent = Math.floor(current);
                        }
                    }, 16);
                }
            });
        };

        window.addEventListener('scroll', animateCounters);
        animateCounters(); // Check on load

        // Form submission
        const contactForm = document.getElementById('contactForm');
        
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Pesan telah berhasil dikirim! Saya akan membalasnya secepatnya.');
            contactForm.reset();
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
    </script>
</body>
</html>