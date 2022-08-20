import React from "react";

export default function PageItem({ pageItem }) {
   return(
   <li className="page-item">
    <a className="page-link" href="#">{pageItem.title}</a>
   </li>
   );
}