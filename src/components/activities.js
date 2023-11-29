import Activity from "./activity.js";
import activities_description from "./activities_description.js"
export default function Activities() {
  return (
    <div className="flex mt-10 flex-row flex-wrap gap-[16px]">
      {Object.values(activities_description).map((activity) => (
        <Activity
          src={activity.img_src}
          title={activity.title}
        />
      ))}
    </div>
  );
}
