import { createElement } from 'lwc';
import MeetingRooms from 'c/meetingRooms';

describe('c-meeting-rooms', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it("count of meeting room should be 7", () => {
        const meetingRooms = createElement("c-meetingRooms", { is: MeetingRooms });
    
        document.body.appendChild(meetingRooms);
    
        const allMeetingRoomComponents =
          meetingRooms.shadowRoot.querySelectorAll("c-meeting-room");
    
        expect(allMeetingRoomComponents.length).toBe(7);
      });
    
      it('title should be Meeting Rooms', () => {
        const meetingRooms = createElement("c-meetingRooms", { is: MeetingRooms });
    
        document.body.appendChild(meetingRooms);
    
        const lightningCard =
          meetingRooms.shadowRoot.querySelector("lightning-card");
    
        expect(lightningCard.title).toBe("Meeting Rooms");
      });
});