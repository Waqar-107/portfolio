export function fetchProjects() {
  const data = [
    {
      name: 'DoS-Attack-to-The-DNS-Server',
      description: 'This is a console based program that can flood the DNS server by continuously sending dns queries. The code was tested on Bind9 DNS server. The os was seed-labs ubuntu 16.04',
      gitURL: 'https://github.com/Waqar-107/DoS-Attack-to-The-DNS-Server',
      tech: ['Python', 'Bind9', 'Shell'],
    },

    {
      name: 'Nymeria',
      description: 'An accelerometer based hand gesture controlled robot. This was made during my level-3, term-1 as the microcontroller project.',
      gitURL: 'https://github.com/Waqar-107/Nymeria',
      tech: ['C', 'C++', 'ATMega32'],
    },

    {
      name: 'Rail-Rush',
      description: 'A railway management software. Ticket management, train schedule maintaining can be done. Also tender management has been implemented both for the autority and the bidder.',
      gitURL: 'https://github.com/Waqar-107/Rail-Rush',
      tech: ['HTML', 'CSS', 'Bootstrap', 'PHP', 'JavaScript', 'Oracle-11g'],
    },

    {
      name: 'C compiler',
      description: 'A subset of the gcc compiler that was made during my level-3, term-1. It was made through four iterations. First a data structure called symbolTable was made, using lex a code was tokenized, using yacc the grammer was written and finally converted into 8086-assembly code.',
      gitURL: 'https://github.com/Waqar-107/CSE-310-Compiler',
      tech: ['C', 'C++', 'Yacc', 'Lex', 'Shell'],
    },

    {
      name: 'Design Pattern',
      description: 'Various design patterns implemented in java.',
      gitURL: 'https://github.com/Waqar-107/Design-Pattern',
      tech: ['Java'],
    },

    {
      name: 'Tic-Tac-Toe',
      description: 'The classic tic-tac-toe game implemented in native android. Min-max algorithm have been used that drives the opponent',
      gitURL: 'https://github.com/Waqar-107/Tic-Tac-Toe',
      tech: ['Java', 'Android'],
    },


    {
      name: 'Lost and Survive',
      description: 'An app made for IEEE MadC 2017. The app had informations that can be used during travelling, also it gives the nearest police stations and hospitals location. It can send mail in case of emergency',
      gitURL: 'https://github.com/Waqar-107/Lost_and_Survive',
      tech: ['Java', 'Android'],
    },

    {
      name: 'Flappy-Ball',
      description: 'A game using c and c++. For the gui we used igraphics. It was our term project of level-1, term-1',
      gitURL: 'https://github.com/Waqar-107/Flappy-ball',
      tech: ['C', 'C++'],
    },
  ];

  return data;
}