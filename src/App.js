import { useEffect } from 'react'
import './App.css';
import { DeviceUUID } from 'device-uuid'
// import graph from 'fb-react-sdk';

function App() {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  // useEffect( async () => {
  //   const { default: ReactPixel } = await import('react-facebook-pixel');
  //   ReactPixel.init('577428994447337', {
  //     em: 'email@email.com',         //Values will be hashed automatically by the pixel using SHA-256
  //     fn: 'first_name',    
  //     ln: 'last_name',
  //     country: 'country'
  //   }, {
  //       autoConfig: true,
  //       debug: true,
  //     });
  //   ReactPixel.pageView();
  //   ReactPixel.track("ViewContent")
  //   console.log(ReactPixel.fbq('track', 'ViewContent'));
  //   // graph.setAccessToken('EAATqImLk7PcBAMEQLEoi72HW1KkZBf88vi8WyZB7f6JOMAT0uU0bJsdEZCsECIDlEkGvDqawmp4uSVpRIj5dzot9UAMI3imXR7bSAs9LZC29YdzAyadgKO0ySAZBu7l1LRGQZBCQwktQDegs3zcGRCO4CXZBuLlQPZBsZBrTUi575QXiXD7ZBWjpeWZC9vJVg0GM27ynQZCCOSoO9ZCPHm7T6VOyU');
  //   // graph.get('me?fields=id,name,adaccounts{campaigns}',function(err, res) {
  //   //   console.log(res); 
  //   // })
  // }, [])
  
  useEffect(() => {
    let uuid = new DeviceUUID().get()
    console.log(uuid);
    fetchData();
  }, [])
  
  const fetchData = () => 
  fetch(
    "https://graph.facebook.com/v16.0/me?fields=id%2Cname%2Cadaccounts%7Bcampaigns%7D%2Cpersonal_ad_accounts%7Bcampaigns%7D&access_token=EAATqImLk7PcBAHZA0cjxkaB8FJCVwePvibb4HIzmkkk88iMilbFthCTz9dMeFRZAww7631njRIHdwPUs5mYAdv4Px9pp4ZBC9Ep9ZAmk8Uj0HdWaYpMEsu017CEVIliooXp4LA6M9BZBrh81M01a03lBDyeSdKaIneJD92wWkfP6LDSPbgTZCzi6w6HbKxUNKZB9yZCgOBhgbIEaGKXXupw7"
    )
    .then(data => data.json())
    .then(data => console.log(data))

    function getMachineId() {
    
      let machineId = localStorage.getItem('MachineId');
      
      if (!machineId) {
        machineId = new DeviceUUID().get()
        localStorage.setItem('MachineId', machineId);
      }
  
      return machineId;
  }
  return (
    <div className="App">
      <header className="App-header">
      <button>Event</button>
      {getMachineId()}
      </header>
    </div>
  );
}

export default App;
