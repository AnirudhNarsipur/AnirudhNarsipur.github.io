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
};

const siteConfig: SiteConfig = {
    title: 'Anirudh Narsipur',
    // subtitle: 'Minimal Astro.js theme',
    description: 'Astro.js and Tailwind CSS theme for blog and portfolio by justgoodui.com',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Dante - Astro.js and Tailwind CSS theme'
    },
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
            text: 'Resume',
            href: 'AnirudhNarsipurResume.pdf'
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
        {
            text: 'Terms',
            href: '/terms'
        },
        {
            text: 'Download theme',
            href: 'https://github.com/JustGoodUI/dante-astro-theme'
        }
    ],
    socialLinks: [
        {
            text: 'Dribbble',
            href: 'https://dribbble.com/'
        },
        {
            text: 'Instagram',
            href: 'https://instagram.com/'
        },
        {
            text: 'GitHub',
            href: 'https://twitter.com/'
        }
    ],
    hero: {
        title: 'Anirudh Narsipur',
        text: `<p>Hi, I&#39;m Anirudh.</p>
<p>I&#39;m currently pursuing a fifth-year master&#39;s degree in Computer Science at Brown University (graduating May 2025). Before this, I graduated with a B.Sc (Honors) in Computer Science-Mathematics from Brown. I received the <a href="https://awards.cs.brown.edu/2024/05/06/twenty-eight-students-win-2024-brown-cs-senior-prizes/">senior prize</a> in Computer Science awarded to the top graduating seniors in the department.</p> <p>I&#39;m a member of the <a href="https://atlas.cs.brown.edu/">ATLAS research group</a> at Brown where I&#39;m advised by Nikos Vasilakis. My work focuses on using formal methods to better understand shell programs. You can find out more by reading my <a href="https://drive.google.com/file/d/1GNCjBlvcHm7y81qqpyAtrOLwbjxKEiEC/view?usp=sharing">undergraduate thesis</a>. Apart from programming languages/formal methods, my main academic interest is in computational biology. I previously was a member of the Fairbrother lab at Brown where I worked with deep learning models to better understand splicing.</p>
<p>I spent two summers interning at the <a href="https://aws.amazon.com/what-is/automated-reasoning/">Automated Reasoning Group</a> at Amazon Web Services (AWS). My work there focused on building software infrastructure to deploy SAT/SMT solvers at cloud scale as well as verifying solver results using proof checkers.</p>
<p>I&#39;m currently looking for full-time job opportunities starting in the summer of 2025.</p>
<p>You can reach me at <a href= "mailto: anirudh_narsipur@brown.edu"> anirudh_narsipur@brown.edu </a>  </p>
`,
        image: {
            src: '/about.jpeg',
            alt: 'A person sitting at a desk in front of a computer'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        title: 'Subscribe to Dante Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        formUrl: '#'
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
