import React from 'react'
import PageTitle from './PageTitle';

export default function PageHeading({title,children}){
    return(
      <div className='page-heading-container'><PageTitle title={title}/>
      <p className='page-heading-paragragh'>{children}</p>
      </div>  
    );
}