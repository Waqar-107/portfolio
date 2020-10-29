export function fetchUgrad() {
	const data = [
		{
			name: "CSE-474-Pattern-Recognition",
			description:
				"Implementation of various pattern recognition techniques. Implemented naive-bayes-classifier, basic perceptron algorithms, neural networks etc.",
			gitURL: "https://github.com/Waqar-107/CSE-474-Pattern-Recognition",
			tags: ["Python", "Jupyter Notebook", "Naive-Bayes", "Perceptron", "Neural Network"],
		},

		{
			name: "CSE-412-Simulation-and-Modelling",
			description: "Simulation of different systems like M/M/K queue, job-shop model etc.",
			gitURL: "https://github.com/Waqar-107/CSE-412-Simulation-and-Modelling",
			tags: ["Python"],
		},

		{
			name: "CSE-410-Computer-Graphics",
			description:
				"Use of OpenGL, implementing how functions of OpenGL works using matrices and implementing a given scene with the concepts of ray tracing.",
			gitURL: "https://github.com/Waqar-107/CSE-410-Computer-Graphics",
			tags: ["C", "C++", "OpenGL", "Ray Tracing"],
		},

		{
			name: "CSE-406-Computer-Security",
			description:
				"Transposition cipher and  DES were implemented. Also buffer overflow, XSS and CSRF attacks were performed.",
			gitURL: "https://github.com/Waqar-107/CSE-406-Computer-Security",
			tags: ["C++", "Python"],
		},

		{
			name: "CSE-322-Computer-Networks",
			description:
				"Use of SMTP and HTTP protocol, DVR implementation, RDT simulation, error correction using CRC checksum were implemented. Also experimented with NS2.",
			gitURL: "https://github.com/Waqar-107/CSE-322-Computer-Networks",
			tags: ["C", "C++", "Tcl", "Shell", "NS2"],
		},

		{
			name: "CSE-318-Artificial-Intelligence",
			description:
				"TSP, n-puzzle problem, missionary and cannibal problem, mancala game and csp were implemented.",
			gitURL: "https://github.com/Waqar-107/CSE-318-Artificial-Intelligence",
			tags: ["C", "C++", "Python"],
		},

		{
			name: "CSE-314-Operating-System",
			description:
				"Basic shell programming, Pthreads, Semaphores and Mutex were done. xv6 was selected to experiment with. Adding system calls, implementing socket api and paging for xv6 were done",
			gitURL: "https://github.com/Waqar-107/CSE-314-Operating-System",
			tags: ["C", "C++", "Python", "xv6", "Shell"],
		},

		{
			name: "CSE-307-Software-Engineering",
			description: "Various design patterns were taught",
			gitURL: "https://github.com/Waqar-107/Design-Pattern",
			tags: ["Java"],
		},

		{
			name: "CSE-310-Compiler",
			description:
				"A subset of the gcc compiler. It was made through four iterations. First a data structure called symbolTable was made, using lex a code was tokenized, using yacc the grammer was written and finally converted into 8086-assembly code.",
			gitURL: "https://github.com/Waqar-107/CSE-310-Compiler",
			tags: ["C", "C++", "Yacc", "Lex", "Shell"],
		},

		{
			name: "CSE-300-Technical-Writing-and-Presentation",
			description:
				"LaTex was taught, also basics of techincal writings and presentation were taught.",
			gitURL: "https://github.com/Waqar-107/CSE-300-Technical-Writing-and-Presentation",
			tags: ["LaTex"],
		},

		{
			name: "CSE-316-Microprocessors-Microcontrollers-and-Embedded-Systems",
			description:
				"Assembly language for intel 8086 microprocessor were taught. Also ATMega32 were used to experiment.",
			gitURL:
				"https://github.com/Waqar-107/CSE-316-Microprocessors-Microcontrollers-and-Embedded-Systems",
			tags: ["Assembly", "C", "C++", "ATMega32"],
		},

		{
			name: "CSE-208-Data-Structure-and-Algorithm-2",
			description:
				"Prims, Kruskals, Bellman-Ford, Floyd-Warshall algorithm, Ford-Fulkerson Method were implemented. Also Red-Black tree, Branch and Bound, Hashing techniques, Dynamic Programmings were done.",
			gitURL: "https://github.com/Waqar-107/CSE-208-Data-Structure-and-Algorithm-2",
			tags: ["C++"],
		},

		{
			name: "CSE-215-Database",
			description: "SQL for Oracle were taught",
			gitURL: "https://github.com/Waqar-107/CSE-215-Database",
			tags: ["PLSQL", "Oracle-11g"],
		},

		{
			name: "CSE-218-Numerical-Methods",
			description:
				"Various numerical methods such as Bisection, Gauss-Jordan, Runge-Kutta were implemented.",
			gitURL: "https://github.com/Waqar-107/CSE-218-Numerical-Methods",
			tags: ["Matlab"],
		},

		{
			name: "CSE-204-Data-Structure-and-Algorithm-1",
			description:
				"Data structures such as arraylist, linked-list, binary search tree, heap, graph were implemented. Also divide and conquer and greedy techniques were taught.",
			gitURL: "https://github.com/Waqar-107/CSE-204-Data-Structure-and-Algorithm-1",
			tags: ["C++"],
		},

		{
			name: "CSE-108-Object-Oriented-Programming-Language",
			description: "C++ and Java were taught.",
			gitURL: "https://github.com/Waqar-107/CSE-108-Object-Oriented-Programming-Language",
			tags: ["C++", "Java"],
		},
	];

	return data;
}
