import TrackList from "./TrackList";
import { shallow } from "enzyme";


describe("TrackList", () => {
 it("shows two tracks", () => {
  const props = {
   tracks: [
    {
     id: 1,
     title: "To All The Boys I've Loved Before"
    },
    {
     id: 2,
     title: "A Man Learns Code"
    }
   ]
  };
  const element = shallow(<TrackList {...props} />);

  expect(element.find("div > div")).to.have.length(2);
 });
});