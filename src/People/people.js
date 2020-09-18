import React from 'react';
import './people.css';
import { people } from './data';

export const People = () => {
  return (
    //<>
      <div className="people-information">
      {people.map((data, key) => {
          return (
            /*<div key={key}>
              {data.name +
                " , " +
                data.height +
                " ," +
                data.mass +
                " ," +
                data.hair_color +
                " ," +
                data.skin_color +
                " ," +
                data.eye_color +
                " ," +              
                data.birth_year +
                " ," +
                data.gender}
            </div>  */
            <table className="peopletag">
              <tr>

              <h5>{data.name}</h5>    
              <h5>{data.height}</h5>  
              <h5>{data.mass}</h5> 
              <h5>{data.hair_color}</h5> 
              <h5>{data.skin_color}</h5>
              <h5>{data.eye_color }</h5>
              <h5>{data.birth_year}</h5>  
              <h5>{data.gender}</h5>

              </tr>

            </table>    	
          );
        })}
      </div>
    //</>
  );
};
