import SocialWeb from "../../components/SocialLinks/socialWeb";
import NavBar from "../../components/Header/NavBar";
import Intro from "./Intro";
import AboutMe from "./AboutMe";
import Education from "./Education";
import WorkExperience from "./WorkExperience";
import Publications from "./Publications";
import CurrentProjects from "./CurrentProjects";
import Contact from "./Contact/Contact";
import Footer from "../../components/Footer/Footer";

import styles from "./HomeStyles";

const Home = () => {
	const classes = styles();
	return (
		<div className={classes.root}>
			<div className={classes.navContainer}>
				<NavBar />
			</div>
			<div className={classes.content}>
				<div className={classes.socialWeb}>
					<SocialWeb />
				</div>
				<div style={{ height: "10vh" }}></div>

				<div className={classes.itemContainer}>
					<Intro />
				</div>

				<div
					id="aboutMe"
					style={{ marginBottom: 70 }}
					className={classes.itemContainer}
					data-aos="fade-up"
					data-aos-once="true"
					data-aos-offset="10"
					data-aos-delay="10"
					data-aos-duration="1000"
					data-aos-easing="ease-in-out">
					<AboutMe />
				</div>

				<div
					id="education"
					style={{ marginBottom: 120 }}
					className={classes.itemContainer}
					data-aos="fade-up"
					data-aos-once="true"
					data-aos-offset="10"
					data-aos-delay="10"
					data-aos-duration="1000"
					data-aos-easing="ease-in-out">
					<Education />
				</div>

				<div
					id="work"
					style={{ marginBottom: 120 }}
					className={classes.itemContainer}
					data-aos="fade-up"
					data-aos-once="true"
					data-aos-offset="10"
					data-aos-delay="10"
					data-aos-duration="1000"
					data-aos-easing="ease-in-out">
					<WorkExperience />
				</div>

				<div
					id="projects"
					style={{ marginBottom: 90 }}
					className={classes.itemContainer}
					data-aos="fade-up"
					data-aos-once="true"
					data-aos-offset="10"
					data-aos-delay="10"
					data-aos-duration="1000"
					data-aos-easing="ease-in-out">
					<CurrentProjects />
				</div>

				<div
					id="publications"
					style={{ marginBottom: 120 }}
					className={classes.itemContainer}
					data-aos="fade-up"
					data-aos-once="true"
					data-aos-offset="10"
					data-aos-delay="10"
					data-aos-duration="1000"
					data-aos-easing="ease-in-out">
					<Publications />
				</div>

				{/* <div
					id="problemSolving"
					style={{ marginBottom: 150 }}
					className={classes.itemContainer}
					data-aos="fade-up"
					data-aos-once="true"
					data-aos-offset="10"
					data-aos-delay="10"
					data-aos-duration="1000"
					data-aos-easing="ease-in-out">
					<ProblemSolving />
				</div> */}



				<div
					id="contactMe"
					className={classes.itemContainer}
					data-aos="fade-up"
					data-aos-once="true"
					data-aos-offset="10"
					data-aos-delay="10"
					data-aos-duration="1000"
					data-aos-easing="ease-in-out">
					<Contact />
				</div>

				<Footer />
			</div>
		</div>
	);
};

export default Home;
