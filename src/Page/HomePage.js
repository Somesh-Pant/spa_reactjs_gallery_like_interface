import { useState } from "react";
import Grid from '../components/grid/gridLayout';
import classes from '../layout.module.css';


const DUMMY_DATA = [
    {
        id: 'm1',
        title: 'river',
        imageURL: 'https://eartheclipse.com/wp-content/uploads/2019/05/torrent-white-water-force-nature-river.jpg',
        description:
          'lorem dipsum',
        category: 'nature'  
      },
      {
        id: 'm2',
        title: 'himalaya',
        imageURL: 'https://cdn.britannica.com/67/19367-050-885866B4/Valley-Taurus-Mountains-Turkey.jpg',
        description:
          'lorem dipsum',
          category: 'nature'  
      },
      {
        id: 'm3',
        title: 'bmw car',
        imageURL: 'https://mediapool.bmwgroup.com/cache/P9/201411/P90169551/P90169551-the-new-bmw-m6-coup-exterior-12-2014-600px.jpg',
        description:
          'lorem dipsum',
          category: 'car'  
      },  
      {
        id: 'm4',
        title: 'audi car',
        imageURL: 'https://cdn.motor1.com/images/mgl/BEooZ/s3/2021-audi-s3.jpg',
        description:
          'lorem dipsum',
          category: 'car'  
      },
      {
        id: 'm5',
        title: 'woman',
        imageURL: 'https://cdn.lifehack.org/wp-content/uploads/2015/01/alpha-woman-alone.jpeg',
        description:
          'lorem dipsum',
          category: 'people'  
      },
      {
        id: 'm6',
        title: 'man',
        imageURL: 'https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg',
        description:
          'lorem dipsum',
          category: 'people'  
      },
]

function HomePage(){
    const [filteredData, setFilteredData] = useState(DUMMY_DATA);


    function showAllHandler(){
        setFilteredData([]);   
        setFilteredData(DUMMY_DATA);
        console.log(filteredData); 
    }
    function naturefilterHandler(){
        const filtered_DATA = DUMMY_DATA.filter(
            item => item.category.includes('nature'));
            setFilteredData(filtered_DATA);    
            console.log(filteredData);
    }
    function carfilterHandler(){
        const filtered_DATA = DUMMY_DATA.filter(
            item => item.category.includes('car'));
            setFilteredData(filtered_DATA);
            console.log(filteredData);    
    }
    function peoplefilterHandler(){
        const filtered_DATA = DUMMY_DATA.filter(
            item => item.category.includes('people'));
            setFilteredData(filtered_DATA);
            console.log(filteredData);    
    }

    return (
        <section>
          <h1>All Photos</h1>
          <button className={classes.btn} onClick={showAllHandler}>
            Show All
          </button>
          <button className={classes.btn} onClick={naturefilterHandler}>
            Nature
          </button>
          <button className={classes.btn} onClick={carfilterHandler}>
            Car
          </button>
          <button className={classes.btn} onClick={peoplefilterHandler}>
            People
          </button>
          <Grid items={filteredData} />
        </section>
      );
}

export default HomePage