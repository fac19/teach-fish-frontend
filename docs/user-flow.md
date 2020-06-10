# Main User Flow & Front-end Routes

On All Authorised Pages:

- Top Navbar with icon links to dashboard, profile + log out
- Help Link & Icon in bottom right corner

1. Landing Page `/`
   - Heading: "Enterprise Adventure"
   - Link to About Page: "Learn More About The App"
   - Link to Sign Up Page
   - Link to Log In Page
   - Teach A Man To Fish Logo
2. About page (info) `/about`
   - Epic video
   - Link to landing page
   - Link to Sign Up page
   - Static content below (if provided):
     - App mission
     - What is TAMTF
3. Sign Up Page `/signup`
   - Link to go back
   - Main heading
   - Form:
     - username
     - email
     - password
     - submit button
     - gender (female, male, other, prefer not to say)
   - Link to login
4. Log In Page `/login`
   - Link to go back
   - Main heading
   - Form:
     - email
     - password
     - submit button
   - Link to Sign Up page
5. My Missions Page `/my-missions`
   - Profile picture/ emoji etc
   - Each mission has a name and an icon
   - Unavailable missions greyed out/ shadowed/ padlocked
   - Available missions in full colour and clickable
   - Completed missions have a tick
   - Three missions able to view immediately, click a button for more,
6. My Profile Page `/my-profile`
   - Avatar
   - Points (increases when mission is completed)
   - Badges
     - Signing up badge coloured
     - 4 mission badges greyed out
       - 1 mission
       - 2 missions
       - 5 missions
       - 10 missions
7. Mission: Get Set `mission/:number`
   - Page Heading "Get Set > Ready > Go" (R + G greyed out)
   - Mission "x"
   - Short info
   - Superpower definition
   - Introduction video
   - Button to Next
8. Mission: Ready (multiple pages for questions) `mission/:number`
   - Multiple choice question
   - Mission "x"
   - Questions 1/"x"
   - Potential answers (checkbox)
   - Next button
   - Nav button back to mission page
9. Mission: Ready - Correct answer page `mission/:number`
   - Well done!
   - Image
   - Proceed forward to file upload
10. Mission: Ready - Incorrect answer page `mission/:number`
    - Too bad
    - Image
    - Redirect back to Mission: Get Set
11. Mission: Go (multiple pages for uploads) `mission/:number`
    - Progress bar
    - Task "x"
    - Introduction text
    - Upload/ text area for response/ evidence
    - Button to upload and progress to next question
    - Restart link to return to Mission: Get Set
12. Mission: Go - submit `mission/:number`
    - Progress bar
    - "Review before you submit"
    - Task "x"
    - Print out of evidence for task "x"
    - Submit button
    - Redirect back to Mission: Get Set
13. Mission complete `mission/:number`
    - Big mission badge
    - Confetti
    - "Mission one complete" around the badge
    - Link to dashboard
14. My Missions `/my-missions`
    - Next mission is unlocked, displays badge icon and is clickable
15. View past mission `mission/:number`
    - Completed mission info
    - Link to view my evidence
16. My evidence `/evidence/:number` (route tbd)
    - Task one picture
    - Task two text
    - Link to dashboard
