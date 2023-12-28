const edtech_soups23_img = require("../../../assets/publications/posters/edtech_soups23.jpg")
const misinfo_soups23_img = require("../../../assets/publications/posters/misinfo_soups23.jpg")

exports.papers = [
	{
		name: "",
    authors: "",
		venue: "",
    paperLink: "",
	}
];

exports.posters = [
	{
		name: "Exploring Privacy and Security Concerns of EdTech Users: A Qualitative Analysis of User Written Reviews",
		authors: ["Waqar Hassan Khan", "Protik Bose Pranto", "Tianyi Yang", "Rakibul Hasan"],
    venue: "Nineteenth Symposium on Usable Privacy and Security (SOUPS 2023)",
		posterLink: "https://www.usenix.org/system/files/soups2023-poster79_khan_final.pdf",
    paperLink: "https://www.usenix.org/system/files/soups2023-poster79_khan_abstract_final.pdf",
    imageLink: edtech_soups23_img
	},

  {
    name: "Understanding the Effect of Private Data in Disinformation Propagation",
		authors: ["Protik Bose Pranto", "Waqar Hassan Khan", "Sahar Abdelnabi", "Rebecca Weil", "Mario Fritz", "Rakibul Hasan"],
    venue: "Nineteenth Symposium on Usable Privacy and Security (SOUPS 2023)",
		posterLink: "https://persue-lab-asu.github.io/assets/publications/SOUPS_23_poster_misinfo/poster.pdf",
    paperLink: "https://persue-lab-asu.github.io/assets/publications/SOUPS_23_poster_misinfo/abstract.pdf",
    imageLink: misinfo_soups23_img
	},
];