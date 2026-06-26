const ucrc_25_uci_img = require("../../../../assets/publications/posters/UCRC_2025_UCI/UCRC_2025_UCI.jpg")
const ucrc_25_cool_routes_img = require("../../../../assets/publications/posters/UCRC_2025_Cool_Routes/UCRC_2025_Cool_Routes.jpg")
const issr_fall_25_img = require("../../../../assets/publications/posters/issr_fall_25.png")
const issr_spring_25_img = require("../../../../assets/publications/posters/issr_spring_25.jpg")

exports.peer_reviwed = [
    {
        type: "Conference Paper",
        rank: "CORE A",
        year: "2026",
        name: "\"I Just Take Every Situation as It Comes\": Exploring How Weather Affects Blind and Low Vision Pedestrians in Urban Environments",
        authors: ["Waqar Hassan Khan", "Isaac Buo", "Ariane Middel"],
        venue: "The 28th International ACM SIGACCESS Conference on Computers and Accessibility (ASSETS 2026)",
        venueLink: "https://assets26.sigaccess.org/index.html",
        // paperLink: "https://doi.org/10.1016/j.buildenv.2026.114622",
    },
    {
        type: "Journal Article",
        rank: "Q1",
        year: "2026",
        name: "Cool Routes: Real-Time Human Thermal Exposure Routing",
        authors: ["Isaac Buo", "Waqar Hassan Khan", "Evan Crabtree", "Fletcher Emmott", "Devbrat Hariyani", "Ariane Middel"],
        venue: "Building and Environment",
        venueLink: "https://www.sciencedirect.com/journal/building-and-environment",
        paperLink: "https://doi.org/10.1016/j.buildenv.2026.114622",
    },
    {
        type: "Conference Poster",
        year: "2025",
        rank: "CORE A",
        name: "\"Tell Me What That Is\": Examining Blind and Low Vision Individuals’ Reviews on Assistive Smartphone Applications",
        authors: ["Waqar Hassan Khan", "Isaac Buo", "Ariane Middel"],
        venue: "The 27th International ACM SIGACCESS Conference on Computers and Accessibility (ASSETS 2025)",
        venueLink: "https://assets25.sigaccess.org/",
        paperLink: "https://dl.acm.org/doi/10.1145/3663547.3759699",
    },
    {
        type: "Conference Poster",
        year: "2023",
        rank: "CORE A",
        name: "Exploring Privacy and Security Concerns of EdTech Users: A Qualitative Analysis of User Written Reviews",
        authors: ["Waqar Hassan Khan", "Protik Bose Pranto", "Tianyi Yang", "Rakibul Hasan"],
        venue: "Nineteenth Symposium on Usable Privacy and Security (SOUPS 2023)",
        venueLink: "https://www.usenix.org/conference/soups2023",
        posterLink: "publications/posters/SOUPS_23_poster_edtech/poster.pdf",
        paperLink: "publications/posters/SOUPS_23_poster_edtech/abstract.pdf",
    },

    {
        type: "Conference Poster",
        year: "2023",
        rank: "CORE A",
        name: "Understanding the Effect of Private Data in Disinformation Propagation",
        authors: ["Protik Bose Pranto", "Waqar Hassan Khan", "Sahar Abdelnabi", "Rebecca Weil", "Mario Fritz", "Rakibul Hasan"],
        venue: "Nineteenth Symposium on Usable Privacy and Security (SOUPS 2023)",
        venueLink: "https://www.usenix.org/conference/soups2023",
        posterLink: "publications/posters/SOUPS_23_poster_misinfo/poster.pdf",
        paperLink: "publications/posters/SOUPS_23_poster_misinfo/abstract.pdf",
    },

    {
        type: "Conference Workshop Paper",
        rank: "CORE A*",
        year: "2023",
        name: "From Bad to Worse: Using Private Data to Propagate Disinformation on Online Platforms with a Greater Efficiency",
        authors: ["Protik Bose Pranto", "Waqar Hassan Khan", "Sahar Abdelnabi", "Rebecca Weil", "Mario Fritz", "Rakibul Hasan"],
        venue: "Designing Technology and Policy Simultaneously (CHI'23 Workshop)",
        venueLink: "https://chi2023.acm.org/for-authors/workshops-and-symposia/accepted-workshops-symposia/",
        paperLink: "https://arxiv.org/pdf/2306.04883"
    },
    {
        type: "Preprint",
        year: "2022",
        name: "Shashthosheba: Dissecting Perception of Bangladeshi People towards Telemedicine Apps through the Lens of Features of the Apps",
        authors: ["Waqar Hassan Khan", "Md Al Imran", "Ahmed Nafis Fuad", "Mohammed Latif Siddiq", "A.B.M Alim Al Islam"],
        venue: "arXiv preprint (2022)",
        paperLink: "publications/papers/shashthosheba.pdf",
    }
]

exports.poster_events = [
    {
        type: "Poster Event",
        year: "2025",
        name: "\"To Walk or Not to Walk\": Pedestrian Perceptions of Heat and Shade in Route Planning",
        authors: ["Waqar Hassan Khan", "Isaac Buo", "Ariane Middel"],
        venue: "ISSR Graduate Student Poster Contest (Fall 2025)",
        venueLink: "https://issr.asu.edu/node/926",
        image: issr_fall_25_img,
        award: "2nd Place"
    },
    {
        type: "Poster Event",
        year: "2025",
        name: "Exploring Weather-Induced Navigational Challenges for Blind and Visually Impaired Pedestrians in Urban Environments",
        authors: ["Waqar Hassan Khan", "Ariane Middel"],
        venue: "ISSR Graduate Student Poster Contest (Spring 2025)",
        venueLink: "https://issrasu.submittable.com/gallery/521546c2-33a0-4287-a04d-3d1cdd4c7f68",
        image: issr_spring_25_img
    },
    {
        type: "Poster Event",
        year: "2025",
        name: "ASU Cool Routes",
        authors: ["Waqar Hassan Khan", "Isaac Buo", "Fletcher Emmott", "Devbrat Hariyani", "Evan Crabtree", "Ariane Middel"],
        venue: "UCRC Annual Poster Event (2025)",
        venueLink: "https://ucrc.asu.edu/ucrc-poster-event",
        posterLink: "publications/posters/UCRC_2025_Cool_Routes/UCRC_2025_Cool_Routes.pdf",
        image: ucrc_25_cool_routes_img
    },
    {
        type: "Poster Event",
        year: "2025",
        name: "A Systematic Literature Review on Urban Climate Informatics",
        authors: ["Protik Bose Pranto", "Waqar Hassan Khan", "Ariane Middel"],
        venue: "UCRC Annual Poster Event (2025)",
        venueLink: "https://ucrc.asu.edu/ucrc-poster-event",
        posterLink: "publications/posters/UCRC_2025_UCI/UCRC_2025_UCI.pdf",
        image: ucrc_25_uci_img
    }
];

exports.datasets = [
    {
        type: "Dataset",
        year: "2026",
        name: "Hourly Mean Radiant Temperature Distribution on a summer day (2023-07-19) Maricopa County, Arizona (USA)",
        authors: ["Isaac Buo", "Waqar Hassan Khan", "Protik Bose Pranto", "Ariane Middel"],
        venue: "CAP LTER",
        venueLink: "https://globalfutures.asu.edu/caplter/data-portal/",
        datasetLink: "https://doi.org/10.6073/pasta/300ddb6879bab8a5e0208f6df3ed2cc0",
    },
    {
        type: "Dataset",
        year: "2026",
        name: "Hourly Mean Radiant Temperature Distribution on a summer day (2024-06-06) Maricopa County, Arizona (USA)",
        authors: ["Isaac Buo", "Waqar Hassan Khan", "Protik Bose Pranto", "Ariane Middel"],
        venue: "CAP LTER",
        venueLink: "https://globalfutures.asu.edu/caplter/data-portal/",
        datasetLink: "https://doi.org/10.6073/pasta/b25c2e2fcafe68900c7f382a6f95399c",
    }
];

exports.conference_other_tracks = [
    {
        name: "[Abstract] Online Decision-Making Tool for Active Shade Management",
        authors: ["Ariane Middel", "Gisel Guzman", "Waqar Hassan Khan"],
        venue: "12th International Conference on Urban Climate",
        venueLink: "https://meetingorganizer.copernicus.org/ICUC12/ICUC12-955.html",
        paperLink: "publications/papers/ICUC12-955-print.pdf",
    },
];