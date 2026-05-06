import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  SiReact, 
  SiNodedotjs,
  SiEthereum,
  SiBlockchaindotcom,
  SiShopify
} from 'react-icons/si'
import { 
  FaMobileAlt, 
  FaServer, 
  FaBitcoin, 
  FaBrain,
  FaGamepad,
  FaCode,
  FaExternalLinkAlt,
  FaGithub,
  FaApple,
  FaGooglePlay,
  FaDatabase,
  FaShoppingCart,
  FaHeartbeat,
  FaRobot,
  FaCloud,
  FaExchangeAlt
} from 'react-icons/fa'

// Import project screenshots
import spokenImg from '../assets/spoken.png'
import aiHealthcareImg from '../assets/healthcare.png'
import openSaasImg from '../assets/open-saas.png'
import gsapImg from '../assets/gsap.png'
import nexusmdImg from '../assets/nexusmd.png'
import suitheticImg from '../assets/Suithetic.png'
import veenoxImg from '../assets/veenox.png'
import hosicoImg from '../assets/hosico.png'
import apeStoreImg from '../assets/ape-store.png'
import mortalsoftImg from '../assets/mortalsoft.png'
import quickaiImg from '../assets/quickai.png'
import balancerImg from '../assets/balancer.png'
import sophiaverseImg from '../assets/sophiaverse.png'
import echelonImg from '../assets/echelon.png'
import shopifyImg from '../assets/shopify.png'
import florkImg from '../assets/flork-site.png'
import teddiesImg from '../assets/teddies.png'
import goshuinImg from '../assets/goshu.png'
import linksbaseImg from '../assets/linksbase.png'
import blessImg from '../assets/bless.png'
import magicImg from '../assets/magic-sketch.png'
import zenImg from '../assets/zen.png'
import cropImg from '../assets/cropcare.png'

// import healthcareImage from '../assets/healthcareimage.png'
import './Projects.css'

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [showAll, setShowAll] = useState(false)

  const categories = [
    { name: 'All', icon: <FaCode /> },
    { name: 'Fullstack', icon: <FaServer /> },
    { name: 'Mobile', icon: <FaMobileAlt /> },
    { name: 'Blockchain', icon: <FaBitcoin /> },
    { name: 'AI/ML', icon: <FaBrain /> },
    { name: 'Game', icon: <FaGamepad /> }
  ]

  const projects = [
    {
      title: 'Nothing Tech',
      subtitle: 'Shopify E-commerce Platform',
      description: 'Modern e-commerce platform for Nothing tech products featuring innovative design, seamless shopping experience, product showcases, and integrated payment systems.',
      technologies: ['Shopify', 'Liquid', 'JavaScript', 'React', 'CSS3', 'Shopify API'],
      categories: ['Fullstack'],
      image: shopifyImg,
      liveLink: 'https://my.nothing.tech/',
      githubLink: ''
    },
    {
      title: 'Echelon Profile',
      subtitle: 'Web3 Gaming Identity System',
      description: 'Central profile system for Parallel.life gaming platform with pixel-perfect UI delivered across 3 phases. Advanced user authentication, profile customization, and enterprise-grade Web3 integration.',
      technologies: ['Django', 'PostgreSQL', 'Web3', 'Docker', 'GCP', 'Pug'],
      categories: ['Blockchain', 'Fullstack', 'Game'],
      image: echelonImg,
      liveLink: 'https://profile.echelon.io/',
      githubLink: ''
    },
    {
      title: 'Spoken.io',
      subtitle: 'E-commerce Platform',
      description: 'A full-featured e-commerce platform with product catalog, shopping cart, user authentication, payment processing, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux', 'Stripe'],
      categories: ['Fullstack'],
      image: spokenImg,
      liveLink: 'https://www.spoken.io/',
      githubLink: ''
    },
    {
      title: 'NexusMD.ai',
      subtitle: 'AI Healthcare Platform',
      description: 'Advanced healthcare platform leveraging AI for medical diagnostics and patient management with AI-powered symptom checker and patient monitoring.',
      technologies: ['React', 'Node.js', 'Python', 'FastAPI', 'TensorFlow', 'PostgreSQL'],
      categories: ['AI/ML', 'Fullstack'],
      image: nexusmdImg,
      liveLink: 'http://nexusmd.ai',
      githubLink: ''
    },
    {
      title: 'Sophiaverse.ai',
      subtitle: 'Blockchain Game',
      description: 'Blockchain-based gaming platform with NFT integration, decentralized economy, and immersive gameplay featuring character NFTs and in-game marketplace.',
      technologies: ['Solidity', 'Ethereum', 'Web3.js', 'React', 'Node.js', 'IPFS'],
      categories: ['Blockchain', 'Game', 'Fullstack'],
      image: sophiaverseImg,
      liveLink: 'https://www.sophiaverse.ai/',
      githubLink: ''
    },
    {
      title: 'GSAP Cocktail',
      subtitle: 'Fullstack App',
      description: 'Interactive cocktail recipe application with smooth GSAP animations featuring cocktail discovery, recipe details, ingredient search, and user favorites.',
      technologies: ['React', 'GSAP', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'],
      categories: ['Fullstack'],
      image: gsapImg,
      liveLink: 'https://gsap-cocktail-six-snowy.vercel.app/',
      githubLink: 'https://github.com/luukogod/Gsap-Cocktail'
    },
    {
      title: 'MortalSoft',
      subtitle: 'Casino Game Platform',
      description: 'Blockchain-powered casino gaming platform featuring various casino games with provably fair algorithms and cryptocurrency payments.',
      technologies: ['Solidity', 'Web3.js', 'React', 'Node.js', 'WebGL', 'Phaser'],
      categories: ['Game', 'Blockchain'],
      image: mortalsoftImg,
      liveLink: 'https://mortalsoft.net/',
      githubLink: 'https://github.com/luukogod/MortalSoft-Casino-game'
    },
    {
      title: 'OpenSaaS',
      subtitle: 'SaaS Platform',
      description: 'Open-source SaaS platform with multi-tenant architecture, subscription management, and comprehensive admin dashboard for business applications.',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Stripe', 'Tailwind'],
      categories: ['Fullstack'],
      image: openSaasImg,
      liveLink: 'https://opensaas.sh/',
      githubLink: 'https://github.com/luukogod/Open-SaaS'
    },
    {
      title: 'QuickAI',
      subtitle: 'AI SaaS Platform',
      description: 'AI-powered SaaS platform offering various AI tools including content generation, image creation, code assistance, and data analysis.',
      technologies: ['React', 'FastAPI', 'Python', 'OpenAI', 'PostgreSQL', 'Redis'],
      categories: ['AI/ML'],
      image: quickaiImg,
      liveLink: 'https://quick-ai-gray-eight.vercel.app/',
      githubLink: 'https://github.com/luukogod/QuickAI'
    },
    {
      title: 'Healthcare Service',
      subtitle: 'React App',
      description: 'Comprehensive healthcare management system for hospitals and clinics with patient management, appointment scheduling, and medical records.',
      technologies: ['React', 'Firebase', 'Node.js', 'Material-UI', 'Chart.js', 'Redux'],
      categories: ['Fullstack'],
      image: aiHealthcareImg,
      liveLink: 'https://healthcare-service-react-app.web.app/',
      githubLink: 'https://github.com/luukogod/Healthcare-React-App'
    },
    {
      title: 'Balancer.fi',
      subtitle: 'DeFi Protocol',
      description: 'Advanced DeFi protocol for automated portfolio management and liquidity provision with smart order routing and customizable pools.',
      technologies: ['Solidity', 'Ethereum', 'Hardhat', 'TypeScript', 'React', 'GraphQL'],
      categories: ['Blockchain', 'Fullstack'],
      image: balancerImg,
      liveLink: 'https://balancer.fi/',
      githubLink: ''
    },
    {
      title: 'Suithetic',
      subtitle: 'Blockchain & AI Platform',
      description: 'Platform combining blockchain technology with AI for synthetic asset creation and trading featuring AI-powered market prediction and DeFi integration.',
      technologies: ['Solidity', 'Python', 'React', 'FastAPI', 'Machine Learning', 'Web3'],
      categories: ['AI/ML', 'Blockchain'],
      image: suitheticImg,
      liveLink: 'https://www.suithetic.com/',
      githubLink: 'https://github.com/lorine93s/suithetic'
    },
    {
      title: 'Veenox',
      subtitle: 'Perpetual Trading Platform',
      description: 'Decentralized perpetual trading platform with leverage, cross-margin, and advanced trading features built for high-performance trading.',
      technologies: ['Solidity', 'Ethereum', 'Vue.js', 'Node.js', 'WebSocket', 'Redis'],
      categories: ['Blockchain'],
      image: veenoxImg,
      liveLink: 'https://veenox.xyz/',
      githubLink: 'https://github.com/lorine93s/Veenox---Perpetual-trading-platfom'
    },
    {
      title: 'Talk to Hosico',
      subtitle: 'AI Chatbot',
      description: 'AI-powered chatbot with blockchain integration for secure conversations and data ownership featuring NFT-based identity and encrypted messaging.',
      technologies: ['React', 'OpenAI', 'Solidity', 'IPFS', 'Node.js', 'Web3.js'],
      categories: ['AI/ML'],
      image: hosicoImg,
      liveLink: 'https://talk-to-hosico.vercel.app/',
      githubLink: 'https://github.com/luukogod/Hosico-AI-Chatbot'
    },
    {
      title: 'Ape Store',
      subtitle: 'NFT Marketplace',
      description: 'Premium NFT marketplace featuring exclusive digital art and collectibles with auctions, bidding, and community features.',
      technologies: ['Solidity', 'Ethereum', 'Next.js', 'IPFS', 'GraphQL', 'TypeScript'],
      categories: ['Blockchain'],
      image: apeStoreImg,
      liveLink: 'https://ape.store/',
      githubLink: ''
    },
    {
      title: 'Flork Tools',
      subtitle: 'Solana Meme Token Platform',
      description: 'Solana-powered meme token inspired by the beloved online webcomic featuring quirky sock puppet characters. Built with Rust, Anchor framework, and Candy Machine for NFT minting.',
      technologies: ['Solana', 'Rust', 'Anchor', 'Candy Machine', 'Web3'],
      categories: ['Blockchain'],
      image: florkImg,
      liveLink: 'https://flork-site-sooty.vercel.app/',
      githubLink: ''
    },
    {
      title: 'Teddies NFT Shop',
      subtitle: 'Web3 NFT Ecosystem Platform',
      description: 'Unique Web3 platform for the Teddies NFT ecosystem. Earn points, unlock badges, customize profiles, and participate in upcoming drops with programmable NFT (pNFT) technology.',
      technologies: ['Rust', 'Anchor', 'Solana', 'pNFT', 'Web3', 'NFT Marketplace'],
      categories: ['Blockchain'],
      image: teddiesImg,
      liveLink: 'https://www.playteddies.com/',
      githubLink: ''
    },
    {
      title: 'Goshuin Atlas',
      subtitle: 'Mobile App',
      description: 'The ultimate iOS app for cultural travel in Japan. Discover temples and shrines, explore pilgrimages, and track your goshuin collection.',
      technologies: ['SwiftUI', 'SwiftData', 'MapKit', 'iOS'],
      categories: ['Mobile'],
      image: goshuinImg,
      websiteLink: 'https://goshuinatlas.com/en',
      appStoreLink: 'https://apps.apple.com/us/app/goshuin-atlas/id6746737093',
      playStoreLink: 'https://play.google.com/store/apps/details?id=app.bravostudio.A01GSAFMQ9RM9XCA33J7SGTFPF7&hl=en_IE',
      githubLink: ''
    },
    {
      title: 'Links Base',
      subtitle: 'Static Link Manager',
      description: 'Self-hosted, zero-config link dashboard for teams. Beautiful, searchable, and deployable anywhere with static export.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Magic UI'],
      categories: ['Fullstack'],
      image: linksbaseImg,
      websiteLink: 'https://demo.linksbase.app/',
      githubLink: 'https://github.com/luukogod/links-base'
    },
    {
      title: 'Bless Payments',
      subtitle: 'Fintech Mobile App',
      description: 'Send money globally with a modern, secure mobile experience. Production apps for iOS and Android.',
      technologies: ['React Native', 'TypeScript', 'Firebase', 'Node.js'],
      categories: ['Mobile'],
      image: blessImg,
      websiteLink: 'https://blesspayments.com/',
      appStoreLink: 'https://apps.apple.com/au/app/bless-payments-money-transfer/id6447718357',
      playStoreLink: 'https://play.google.com/store/apps/details?id=com.blesspayments.bless'
    },
    {
      title: 'MagicSketch: AI & AR Drawing',
      subtitle: 'Mobile App',
      description: 'Transform photos into beautiful sketches with AI. Built end-to-end; 25k+ downloads.',
      technologies: ['React Native', 'Expo', 'AI/ML', 'AR'],
      categories: ['Mobile', 'AI/ML'],
      image: magicImg,
      appStoreLink: 'https://apps.apple.com/us/app/magic-sketch-by-boogie-board/id1182125825',
      playStoreLink: 'https://play.google.com/store/apps/details?id=com.lunatictech.tracetosketch'
    },
    {
      title: 'ZEN Kayak',
      subtitle: 'Mobile App for iOS and Android',
      description: 'Find kayak launch sites with geolocation, Mapbox tracking, Algolia search, and premium subscriptions.',
      technologies: ['React Native', 'Apollo', 'GraphQL', 'Firebase', 'Mapbox', 'Algolia', 'RevenueCat', 'Jest', 'Storybook'],
      categories: ['Mobile'],
      image: zenImg,
      appStoreLink: 'https://apps.apple.com/us/app/zen-kayak/id1496639813',
      playStoreLink: 'https://play.google.com/store/apps/details?id=com.zentrailsapps.zenkayak'
    },
    {
      title: 'CropCare',
      subtitle: 'AI Plant Health Mobile App',
      description: 'AI-powered plant disease detection with photo scan, detailed diagnosis, history, multi-language support, and Google sign-in.',
      technologies: ['React Native', 'AI/ML', 'Firebase', 'i18n', 'Maps'],
      categories: ['Mobile', 'AI/ML'],
      image: cropImg,
      appStoreLink: 'https://apps.apple.com/ua/app/cropcare/id6756093686?l=uk',
      playStoreLink: 'https://play.google.com/store/apps/details?id=jp.co.secondstep.cropcare&hl=en_SG'
    }
  ]

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => Array.isArray(project.categories) && project.categories.includes(activeCategory))
  
  // Show 6 projects (2 rows of 3) initially
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6)

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>
        
        <motion.div 
          className="project-categories"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.name}
              className={`category-btn ${activeCategory === category.name ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.name)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.icon}
              <span>{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategory}
            className="projects-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {displayedProjects.map((project, index) => (
              <motion.div
                key={index}
                className="project-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="project-image-wrapper">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="project-image"
                    loading="lazy"
                  />
                </div>
                <div className="project-content">
                  {/* Title and Links Row */}
                  <div className="project-header-row">
                    <h3 className="project-title-new">{project.title}</h3>
                    <div className="project-action-links">
                      {project.githubLink ? (
                        <motion.a 
                          href={project.githubLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="action-link-icon"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          title="View on GitHub"
                        >
                          <FaGithub />
                        </motion.a>
                      ) : (
                        <div className="action-link-icon disabled" title="Private Repository">
                          <FaGithub />
                        </div>
                      )}
                      {(project.websiteLink || project.liveLink) && (
                        <motion.a 
                          href={project.websiteLink || project.liveLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="action-link-icon"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          title="Website"
                        >
                          <FaExternalLinkAlt />
                        </motion.a>
                      )}
                      {project.appStoreLink && (
                        <motion.a 
                          href={project.appStoreLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="action-link-icon"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          title="App Store"
                        >
                          <FaApple />
                        </motion.a>
                      )}
                      {project.playStoreLink && (
                        <motion.a 
                          href={project.playStoreLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="action-link-icon"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          title="Google Play"
                        >
                          <FaGooglePlay />
                        </motion.a>
                      )}
                    </div>
                  </div>
                  
                  {/* Subtitle */}
                  <div className="project-subtitle">{project.subtitle}</div>
                  
                  {/* Description */}
                  <p className="project-description-new">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="project-tech-pills">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-pill">{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View More Button */}
        {filteredProjects.length > 6 && (
          <motion.div 
            className="view-more-container"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.button
              className="btn-view-more-projects"
              onClick={() => setShowAll(!showAll)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {showAll ? (
                <>Show Less</>
              ) : (
                <>View More Projects ({filteredProjects.length - 6} more)</>
              )}
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Projects

