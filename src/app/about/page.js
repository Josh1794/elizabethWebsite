import styles from './about.module.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Values = [
  {
    title: 'Empowerment and knowledge sharing',
    paragraphs: [
      `We don’t gate-keep. Even though you may only be working hands-on with you for a month or so, we provide every couple access to a personal “wedding workbook” to help you effectively plan what you need to on your own. From interview questions for you never thought of for your vendor meetings to practical ways to lean on and deputize your I-do crew to the ultimate emergency kit checklist, we give you the best of our knowledge and experience from the time you book with us.`,
    ],
  },
  {
    title: 'Respect for your budget and your priorities',
    paragraphs: [
      `If you listen to every recommendation or opinion on what you “need” for your wedding, costs can get out of control. We will share our recommendations without judgment and will do our best to help you stick to your budget so you’re spending your time and money on the important things. `,
    ],
  },
  {
    title: 'Transparency',
    paragraphs: [
      `No one likes surprises when it comes to booking wedding services. Our pricing is transparent and packages are customizable and based on your event, venue, size, and date. If the event only requires one team member on site, you won’t pay as much as a couple whose event needs an assistant.`,
      `As long as the details of your event remain  consistent, there won’t be any surprises. Of course, we know things can change. We are flexible and will work with you to add on any additional services you need, a la carte.`,
    ],
  },
  {
    title: 'Supporting Artists and Small Businesses',
    paragraphs: [
      `Our favorite vendors are sole proprietors and artist-owned businesses.  This enables couples to get to know the people who will be with you on your wedding journey and support the local creative ecosystem.`,
      `Supporting small businesses and working artists means that your vendor team profits fairly from their work and can further their goals and artistic practice. `,
    ],
  },
  {
    title: 'Accessibility',
    paragraphs: [
      `Accessibility is luxurious, classy, and very necessary. We believe that weddings should be equally enjoyable for every guest, no matter their physical, mental, or cognitive ability.`,
      `Whether you consult with us in the beginning of the process or hire us toward the end for month-of or day-of coordination, we will provide practical, cost-conscious guidance on how to enhance accessibility with your vendors and venue.`,
      `On your day, Elizabeth and any staff hired will prioritize you and your guests’ well-being and enjoyment of the event. Whether it’s appointing an escort to accessible entrances to guiding you or a guests to a sensory space, we’re always on the lookout for ways to support you and your nearest and dearest.`,
    ],
  },
  {
    title: 'Inclusivity',
    paragraphs: [
      `We believe that the wedding process should be empowering and respect your identity, background, experiences, and values.  As coordinators, We embrace you as you are in your wedding journey, and help you find vendors who will do the same.`,
      `Our beloved beauty vendors in particular have meaningful experience with all ages, skin tones/types, and hair textures, because you and every member of your I-do crew deserves an equally superior service.`,
    ],
  },
  {
    title: 'Sustainability',
    paragraphs: [
      `Weddings can be wasteful, but we can help you make your big day kinder to the planet. From the beginning of your journey, we will provide you with achievable, practical ways to make your wedding more green.`,
    ],
  },
];

export default function AboutPage() {
  return (
    <div className={styles.layout}>
      {/* <h1 className={styles.aboutTitle}>About</h1> */}
      {/* <p className={styles.aboutBody}>
        Sometimes making your special day come together can be overwhelming,
        that's where I come in. This is your one-stop shop for all things
        wedding planning. Whether you need day-of, month-of, or even total
        wedding planning, I'm here for you on your special day. I spent several
        years working at luxury brands like La Mer and Burberry as an executive
        assistant, planning work parties, events, and travel. However, I fell in
        love with wedding planning when planning my own wedding.
      </p>
      <p className={styles.aboutBody}>
        Now I want to bring all the expertise I've gained to your wedding,
        making sure everything goes smoothly.
      </p> */}
      <h1 className={styles.aboutTitle}>Our Values</h1>
      {Values.map((value) => {
        return (
          <Accordion
            disableGutters
            sx={{
              background: 'transparent',
              boxShadow: 'none',
              width: '95%',
              marginLeft: '2.5%',
              marginRight: '2.5%',
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1-content'
              id='panel1-header'
            >
              <h4 className={styles.aboutSubTitle}>{value.title}</h4>
            </AccordionSummary>
            <AccordionDetails>
              {value.paragraphs.map((paragraph) => {
                return <p className={styles.aboutBody}>{paragraph}</p>;
              })}
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
