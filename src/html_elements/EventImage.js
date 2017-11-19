import React from "react";
import { Image } from "semantic-ui-react";


export default function EventImage(props) {
  let image_url = props.image_url ? props.image_url : "https://i.pinimg.com/736x/e8/9e/86/e89e86d0d3160284c86c6d779e021471--chevron-rugs-gray-chevron.jpg"

  return <div style={{marginLeft: "15%", marginRight: "15%"}}><Image src={image_url} fluid/></div>
}
