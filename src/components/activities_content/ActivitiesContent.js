import ActivitiesContentBluePrint from "./activities_content_blueprint.js"
import activities_content from "./content.js"
import { useParams } from 'react-router-dom';


export default function ActivitiesContent() {
  const {act} = useParams();
  return <ActivitiesContentBluePrint
    title = {activities_content[act].title}
    date = {activities_content[act].date}
    content={activities_content[act].content} 
    needReference = {activities_content[act].needReference}
    references={activities_content[act].references}/>;
}

