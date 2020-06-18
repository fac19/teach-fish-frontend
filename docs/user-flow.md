# Main User Flow & Front-end Routes

On All Authorised Pages:

- [x] Top Navbar with icon links to dashboard, profile + log out
- [x] Help Link & Icon in bottom right corner

1. Landing Page `/`
   - [x] Heading: "Enterprise Adventure"
   - [x] Link to About Page: "Learn More About The App"
   - [x] Button to open Netlify Identity Widget
   - [x] Teach A Man To Fish Logo
2. About page (info) `/about`
   - [ ] Epic video (needs to be provided by Product Owner)
   - [x] Back icon to Landing Page
   - [x] Button to open Netlify Identity Widget
   - [x] Information about the App provided by Product Owner
3. Sign Up Page `/signup`
   - [x] Main heading "Before you begin..."
   - [x] Form:
     - [x] Date of Birth
     - [x] Country
     - [x] Gender (female, male, other, prefer not to say)
   - [x] Link to "Get Started" - redirects to `/my-missions`
4. My Missions Page `/my-missions`
   - [x] Avatar
   - [x] Mission Buttons
   - [x] Mission Icons (fetch from AirTable API)
   - [x] Unavailable missions greyed out and icons are padlocks
   - [x] Available missions in full colour and clickable
   - [ ] Completed missions have a tick
   - [x] Three missions to view, "More coming soon..." text at the bottom
5. My Profile Page `/my-profile`
   - [ ] Avatar
   - [ ] Points (increases when mission is completed)
   - [ ] Badges
     - [ ] Signing up badge
     - [ ] 1 mission badge
     - [ ] 2 missions badge
     - [ ] 5 missions badge
     - [ ] 10 missions badge
6. Mission: Get Set `mission/:number`
   - [x] Page Heading "Get Set > Ready > Go" (Ready + Go greyed out)
   - [x] Mission Info (fetched from AirTable API)
   - [x] Introduction video (fetched from AirTable API)
   - [x] Button to Next
7. Mission: Ready (multiple pages for questions) `mission/:number`
   - [x] Page Heading "Get Set > Ready > Go" (Get Set + Go greyed out)
   - [x] Multiple choice question
   - [x] Next button
   - [x] Restart mission button
8. Mission: Ready - Correct answer page `mission/:number`
   - [x] Well done!
   - [x] Star Image
   - [x] Proceed forward to file upload
9. Mission: Ready - Incorrect answer page `mission/:number`
   - [x] Too bad
   - [x] Redirect back to Mission: Get Set
10. Mission: Go (multiple pages for uploads) `mission/:number`

- [x] Page Heading "Get Set > Ready > Go" (Get Set + Ready greyed out)
- [x] Steps component
- [x] Mission Info (fetched from AirTable API)
- [x] Cloudinary Widget to upload image
- [x] Text areas to input feedback
- [x] Button to progress to next step
- [x] Restart mission button

11. Mission: Go - submit `mission/:number`

- [x] "Review before you submit"
- [x] Render form inputs
- [x] Submit button
- [x] Restart mission button

12. Mission complete `mission/:number`

- [x] Trophy image
- [x] Confetti
- [x] "Mission `/:number` complete"
- [x] Link to dashboard

13. My Missions `/my-missions`

- [ ] Next mission is unlocked, displays badge icon and is clickable

14. View past mission `mission/:number`

- [x] Completed mission info displayed
