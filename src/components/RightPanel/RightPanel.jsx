import Activities from "./Activities/Activities";
import Contacts from "./Contacts/Contacts";
import Notification from "./Notification/Notification";
import "./RightPanel.css"
function RightPanel() {
  return (<>
    <Notification/>
    <Activities/>
    <Contacts/>
  </>);
}
export default RightPanel;
