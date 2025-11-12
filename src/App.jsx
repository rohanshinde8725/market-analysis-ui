import Section1 from "./components/section1/Section1.jsx";
import Section2 from "./components/section2/Section2.jsx";
import Section3 from "./components/section3/Section3.jsx";

const App = () => {
  const users = [
    { img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=388", 
      intro: "Prime customers that have access to bank credit and are satisfied with the current product", 
      tag: "Satisfied",
      color:"blue"
    },
    { img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387", 
      intro: "Prime customers that have access to bank credit and are not satisfied with the current Service", 
      tag: "Underserved",
      color:"teal" 
    },
    { img: "https://plus.unsplash.com/premium_photo-1661660106241-c9233669ed39?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870", 
      intro: "Customers from near-prime and sub-prime segments with no access to bank credit", 
      tag: "Underbanked",
      color:"darkorange"  
    },
    { img: "https://media.istockphoto.com/id/1278978323/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%88%D0%BA%D0%BE%D0%BB%D1%8C%D0%BD%D0%B8%D1%86%D0%B0-%D0%BF%D1%80%D0%BE%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5-%D1%86%D0%B8%D1%84%D1%80%D0%BE%D0%B2%D0%BE%D0%B9-%D0%BF%D0%BB%D0%B0%D0%BD%D1%88%D0%B5%D1%82-%D0%B2-%D0%BA%D0%BE%D0%BB%D0%BB%D0%B5%D0%B4%D0%B6%D0%B5.jpg?s=612x612&w=0&k=20&c=y0GbrpMRYmyONdkpgVPY2O_12hvYLyqTJPPZYhhegy0=", 
      intro: "Prime customers seek and faster banking services despite credit access.", 
      tag: "Underserved",
      color:"red" 
    },
  ];

  
  return (
    <div>
      <Section1 users={users} />
      <Section2 />
      <Section3 />
    </div>
  );
};

export default App;
