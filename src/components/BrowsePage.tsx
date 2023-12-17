import { FakeData } from "../api/FakeServer";

export function BrowsePage() {
  
  FakeData().then(() => {
    console.log(data);
    
  })

  return (
    <div>Данные</div>
  )
}
