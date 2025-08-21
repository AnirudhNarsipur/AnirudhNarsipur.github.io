export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
    projectLinks: Record<string, string>;
};

const siteConfig: SiteConfig = {
    title: 'Anirudh Narsipur',
    // subtitle: 'Minimal Astro.js theme',
    description: "Anirudh Narsipur's personal website",
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Research',
            href: '/research'
        },
        {
            text: 'GitHub',
            href: 'https://github.com/AnirudhNarsipur',
        },
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/anirudh-narsipur/',
        },
        {
            text: 'Resume',
            href: '/AnirudhNarsipurResume.pdf'
        }
        // {
        //     text: 'Blog',
        //     href: '/blog'
        // },
        // {
        //     text: 'Tags',
        //     href: '/tags'
        // }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
    ],
    socialLinks: [
    ],
    projectLinks: {
      "1_aws" : "/projects/1_aws",   
      "2_ta" : "/projects/2_ta",
      "3_weenix" : "/projects/3_weenix",
      "4_cdclrust" : "https://github.com/AnirudhNarsipur/RustSAT",
      "5_vrp" : "https://github.com/AnirudhNarsipur/Vehicle_Routing_Problem",
      "6_declcheck" : "https://github.com/AnirudhNarsipur/Z3ConcentrationChecker",
      "8_1710" : "https://github.com/CS1710FinalProject/CS1710FinalProject",
      "9_motif" : "https://github.com/AnirudhNarsipur/Finding_Motifs",
      "10_ntru": "https://github.com/AnirudhNarsipur/NTRU",
      "11_falldetect":"https://github.com/AnirudhNarsipur/FallDetectorApp",
      "12_appranking" : "https://github.com/AnirudhNarsipur/Applicant_Ranking",
      "13_pivot" :"https://github.com/PivotClass/Pivot",
      "14_transliterate":"https://github.com/AnirudhNarsipur/Transliterate",
    },
    hero: {
        title: 'Anirudh Narsipur',
        text: `<p>Hi, I&#39;m Anirudh.</p>
<p>I'm currenty based in the Bay Area after finishing a Master's in Computer Science at Brown University. Before this, I graduated with a B.Sc. (Honors) in Computer Science-Mathematics from Brown. I received the <a href="https://awards.cs.brown.edu/2024/05/06/twenty-eight-students-win-2024-brown-cs-senior-prizes/">Senior Prize</a> in Computer Science awarded to the top graduating seniors in the department.</p> <p>At Brown, I was a member of the <a href="https://atlas.cs.brown.edu/">ATLAS Research Group</a> at Brown where I was advised by <a href="https://nikos.vasilak.is/">Nikos Vasilakis</a>. My work focused on using formal methods to better understand shell programs. You can find out more by reading our <a href="https://dl.acm.org/doi/10.1145/3713082.3730395"> HotOS 2025 paper</a>. Apart from programming languages/formal methods, my main academic interest is in Computational Biology. I  was a member of the Fairbrother Lab at Brown where I worked with Deep Learning models to better understand splicing.</p>
<p>I spent two summers interning at the <a href="https://aws.amazon.com/what-is/automated-reasoning/">Automated Reasoning Group</a> at Amazon Web Services (AWS). My work there focused on building software infrastructure to deploy SAT/SMT solvers at cloud scale as well as verifying solver results using proof checkers.</p>
<p>You can reach me at <a href= "mailto: anirudh_narsipur@brown.edu"> anirudh_narsipur@alumni.brown.edu </a>  </p>
`,
        image: {
            src: '/about.jpeg',
            alt: 'A picture of Anirudh smiling'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    postsPerPage: 8,
    projectsPerPage: 10
};

export default siteConfig;
