const edtech_soups23_img = require("../../../assets/publications/posters/SOUPS_23_poster_edtech/poster.jpg")
const misinfo_soups23_img = require("../../../assets/publications/posters/SOUPS_23_poster_misinfo/poster.jpg")

exports.papers = [
  {
    name: "From Bad to Worse: Using Private Data to Propagate Disinformation on Online Platforms with a Greater Efficiency",
    authors: ["Protik Bose Pranto", "Waqar Hassan Khan", "Sahar Abdelnabi", "Rebecca Weil", "Mario Fritz", "Rakibul Hasan"],
    venue: "Designing Technology and Policy Simultaneously (CHI'23 Workshop)",
    paperLink: "publications/papers/CHI_23_Design_Policy_misinfo.pdf"
  },
	{
		name: "Shashthosheba: Dissecting Perception of Bangladeshi People towards Telemedicine Apps through the Lens of Features of the Apps",
    authors: ["Waqar Hassan Khan", "Md Al Imran", "Ahmed Nafis Fuad", "Mohammed Latif Siddiq", "ABM Alim Al Islam"],
		venue: "arXiv preprint (2022)",
    paperLink: "publications/papers/shasthosheba.pdf",
	}
];

exports.posters = [
	{
		name: "Exploring Privacy and Security Concerns of EdTech Users: A Qualitative Analysis of User Written Reviews",
		authors: ["Waqar Hassan Khan", "Protik Bose Pranto", "Tianyi Yang", "Rakibul Hasan"],
    venue: "Nineteenth Symposium on Usable Privacy and Security (SOUPS 2023)",
		posterLink: "publications/posters/SOUPS_23_poster_edtech/poster.pdf",
    paperLink: "publications/posters/SOUPS_23_poster_edtech/abstract.pdf",
    imageLink: edtech_soups23_img
	},

  {
    name: "Understanding the Effect of Private Data in Disinformation Propagation",
		authors: ["Protik Bose Pranto", "Waqar Hassan Khan", "Sahar Abdelnabi", "Rebecca Weil", "Mario Fritz", "Rakibul Hasan"],
    venue: "Nineteenth Symposium on Usable Privacy and Security (SOUPS 2023)",
		posterLink: "publications/posters/SOUPS_23_poster_misinfo/poster.pdf",
    paperLink: "publications/posters/SOUPS_23_poster_misinfo/abstract.pdf",
    imageLink: misinfo_soups23_img
	},
];