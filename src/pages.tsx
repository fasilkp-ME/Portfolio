import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Avatar, 
  Stack,
  LinearProgress,
  TextField,
  IconButton,
  Tooltip
} from '@mui/material';
import { motion } from 'framer-motion';
import { 
  Engineering, 
  LocationOn, 
  CalendarMonth, 
  LinkedIn, 
  Email, 
  Phone, 
  Download,
  ArrowForward,
  Construction,
  Apartment,
  Train,
  CheckCircle,
  AccountTree,
  Speed,
  Person,
  Timeline,
  Work,
  Star,
  ConnectWithoutContact
} from '@mui/icons-material';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

// --- Shared Section Wrapper ---
export const PageWrapper = ({ children }: { children: ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
  >
    <Box sx={{ py: { xs: 8, md: 12 } }}>
      {children}
    </Box>
  </motion.div>
);

// --- Home Page ---
export const Home = () => {
  return (
    <PageWrapper>
      <Container maxWidth="lg">
        <Grid container spacing={8} sx={{ alignItems: 'center' }}>
          <Grid size={{ xs: 12, md: 7 }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Typography variant="overline" sx={{ letterSpacing: 3, fontWeight: 700, color: 'secondary.main' }}>
                PROFESSIONAL PORTFOLIO
              </Typography>
              <Typography variant="h1" sx={{ fontSize: { xs: '3.5rem', md: '5rem' }, mb: 2, mt: 1 }}>
                Fasil <Box component="span" sx={{ color: 'secondary.main' }}>KP</Box>
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 400, color: 'text.secondary', mb: 4, lineHeight: 1.3 }}>
                Senior Site Engineer specializing in <Box component="span" sx={{ color: 'text.primary', fontWeight: 600 }}>Infrastructure, Metro, and High-Rise</Box> construction projects.
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 5, maxWidth: 500, fontSize: '1.1rem' }}>
                Building infrastructure that lasts. With 8+ years of expertise across Qatar and UAE, I deliver excellence in project engineering and site execution.
              </Typography>
              <Stack direction="row" spacing={2}>
                <Button 
                  variant="contained" 
                  size="large" 
                  endIcon={<ArrowForward />}
                  component={Link}
                  to="/projects"
                >
                  View Projects
                </Button>
                <Button variant="outlined" size="large" startIcon={<Download />}>
                  Download CV
                </Button>
              </Stack>

              <Box sx={{ mt: 6 }}>
                <Typography variant="body2" sx={{ fontWeight: 700, mb: 2, color: 'text.secondary', textTransform: 'uppercase', letterSpacing: 1 }}>
                  Quick Explore
                </Typography>
                <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: 'wrap' }}>
                   {[
                     { label: 'About', path: '/about', icon: <Person fontSize="small" /> },
                     { label: 'Experience', path: '/experience', icon: <Timeline fontSize="small" /> },
                     { label: 'Skills', path: '/skills', icon: <Star fontSize="small" /> },
                     { label: 'Contact', path: '/contact', icon: <ConnectWithoutContact fontSize="small" /> }
                   ].map((link) => (
                     <Button 
                       key={link.label}
                       component={Link}
                       to={link.path}
                       variant="text"
                       size="small"
                       startIcon={link.icon}
                       sx={{ 
                         color: 'text.secondary', 
                         '&:hover': { color: 'secondary.main', background: 'transparent' },
                         textTransform: 'none',
                         fontWeight: 500
                       }}
                     >
                       {link.label}
                     </Button>
                   ))}
                </Stack>
              </Box>
            </motion.div>
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Box 
                sx={{ 
                  width: '100%', 
                  aspectRatio: '1/1', 
                  borderRadius: '10% 30% 10% 30%', 
                  bgcolor: 'brand.100', 
                  overflow: 'hidden',
                  position: 'relative',
                  border: '8px solid rgba(52, 152, 219, 0.1)'
                }}
              >
                <img 
                  src="https://picsum.photos/seed/fasil/800/800" 
                  alt="Fasil KP" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  referrerPolicy="no-referrer"
                />
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        <Box sx={{ mt: 15 }}>
          <Grid container spacing={4} sx={{ justifyContent: 'center', textAlign: 'center' }}>
             {[
               { label: 'Years Experience', val: '8+', icon: <CalendarMonth /> },
               { label: 'Major Projects', val: '12+', icon: <CheckCircle /> },
               { label: 'GCC Countries', val: '2', icon: <LocationOn /> },
               { label: 'Structural Safety', val: '100%', icon: <Engineering /> }
             ].map((stat, i) => (
               <Grid size={{ xs: 6, md: 3 }} key={i}>
                 <Box sx={{ p: 4, bgcolor: 'background.paper', borderRadius: 4 }}>
                   <Box sx={{ color: 'secondary.main', mb: 1, display: 'flex', justifyContent: 'center' }}>
                     {stat.icon}
                   </Box>
                   <Typography variant="h3" sx={{ mb: 0.5 }}>{stat.val}</Typography>
                   <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1 }}>
                     {stat.label}
                   </Typography>
                 </Box>
               </Grid>
             ))}
          </Grid>
        </Box>
      </Container>
    </PageWrapper>
  );
};

// --- About Page ---
export const About = () => (
  <PageWrapper>
    <Container maxWidth="md">
      <Typography variant="h2" gutterBottom>About Me</Typography>
      <Typography variant="body1" sx={{ fontSize: '1.2rem', color: 'text.secondary', mb: 6, lineHeight: 1.8 }}>
        I am a Mechanical Engineering graduate (Bachelor of Engineering, First Class, 2016) with over 8+ years of experience in large-scale construction projects across Qatar and the UAE. My journey has been defined by a commitment to structural integrity, team leadership, and efficient site management in some of the region's most iconic developments.
      </Typography>

      <Box sx={{ mb: 10 }}>
        <Typography variant="h4" sx={{ mb: 4 }}>Education</Typography>
        <Card sx={{ p: 4 }}>
          <Stack direction="row" spacing={3} sx={{ alignItems: 'center' }}>
            <Avatar sx={{ bgcolor: 'secondary.main', width: 60, height: 60 }}>
              <GraduationCap />
            </Avatar>
            <Box>
              <Typography variant="h6">Bachelor of Engineering (Mechanical)</Typography>
              <Typography variant="body1" color="text.secondary">First Class Honors • Graduated 2016</Typography>
            </Box>
          </Stack>
        </Card>
      </Box>

      <Typography variant="h4" sx={{ mb: 4 }}>Personal Strengths</Typography>
      <Grid container spacing={3}>
        {[
          { title: 'Project Management', desc: 'Expert in coordinating complex multi-stakeholder infrastructure projects.', icon: <AccountTree /> },
          { title: 'Site Execution', desc: 'Proven track record in managing ground-level operations with 100% safety compliance.', icon: <Construction /> },
          { title: 'Quality Assurance', desc: 'Meticulous attention to detail in technical planning and QA/QC processes.', icon: <CheckCircle /> },
          { title: 'Strategic Planning', desc: 'Able to align engineering requirements with long-term project milestones.', icon: <Speed /> }
        ].map((s, i) => (
          <Grid size={{ xs: 12, md: 6 }} key={i}>
            <Box sx={{ p: 3, border: '1px solid #eee', borderRadius: 3, height: '100%', '&:hover': { background: '#f8f9fa' } }}>
              <Box sx={{ color: 'secondary.main', mb: 2 }}>{s.icon}</Box>
              <Typography variant="h6" gutterBottom>{s.title}</Typography>
              <Typography variant="body2" color="text.secondary">{s.desc}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  </PageWrapper>
);

// Helper for About Icons
const GraduationCap = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
  </svg>
);

// --- Experience Page ---
export const Experience = () => (
  <PageWrapper>
    <Container maxWidth="md">
      <Typography variant="h2" gutterBottom>Career Journey</Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 8 }}>
        Building expertise through hands-on leadership at major GCC infrastructure hubs.
      </Typography>

      <Box sx={{ borderLeft: '3px solid #E9ECEF', ml: 2, pl: 4 }}>
        {[
          {
            date: 'July 2025 – Present',
            title: 'Senior Site Engineer',
            company: 'Dubai Metro Project',
            loc: 'Dubai, UAE',
            desc: 'Leading structural supervision and site coordination for the expanding Dubai Metro network.',
            icon: <Train />
          },
          {
            date: '2022 – 2025',
            title: 'Project Engineer',
            company: 'Infrastructure & High-Rise Portfolio',
            loc: 'Qatar',
            desc: 'Managed structural milestones for landmark residential and public infrastructure projects.',
            icon: <Apartment />
          },
          {
            date: '2019 – 2022',
            title: 'Senior Site Engineer',
            company: 'Infrastructure Developments',
            loc: 'Qatar',
            desc: 'Coordinated large teams for road networks and utility infrastructure supporting major national events.',
            icon: <Construction />
          },
          {
            date: '2017 – 2019',
            title: 'Site Engineer',
            company: 'Metro & Infrastructure Projects',
            loc: 'Qatar',
            desc: 'Hands-on site supervision for foundation works and structural reinforcements.',
            icon: <LocationOn />
          }
        ].map((item, i) => (
          <Box key={i} sx={{ position: 'relative', mb: 8 }}>
            <Box 
              sx={{ 
                position: 'absolute', 
                left: -48, 
                top: 0, 
                width: 32, 
                height: 32, 
                bgcolor: 'secondary.main', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: 'white',
                boxShadow: '0 0 0 8px #fff'
              }}
            >
              {item.icon}
            </Box>
            <Typography variant="overline" color="secondary" sx={{ fontWeight: 700 }}>{item.date}</Typography>
            <Typography variant="h5" sx={{ mt: 0.5, mb: 1 }}>{item.title} <Box component="span" sx={{ color: 'text.secondary', fontSize: '0.9rem', ml: 1 }}>@ {item.company}</Box></Typography>
            <Typography variant="body2" color="brand.600" sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <LocationOn sx={{ fontSize: 16 }} /> {item.loc}
            </Typography>
            <Typography variant="body1" color="text.secondary">{item.desc}</Typography>
          </Box>
        ))}
      </Box>
    </Container>
  </PageWrapper>
);

// --- Projects Page ---
export const Projects = () => {
  const projs = [
    { title: 'Dubai Metro Expansion', cat: 'Metro', img: 'https://picsum.photos/seed/metro1/800/600', desc: 'Critical infrastructure oversight for the latest metro lines.' },
    { title: 'Qatar Rail Station', cat: 'Metro', img: 'https://picsum.photos/seed/rail1/800/600', desc: 'Structural engineer for major underground interchange.' },
    { title: 'Lusail Infrastructure', cat: 'Infrastructure', img: 'https://picsum.photos/seed/infra1/800/600', desc: 'Utility network and road development in Qatar.' },
    { title: 'Marina High-Rise', cat: 'High-rise', img: 'https://picsum.photos/seed/tower1/800/600', desc: 'Supervision of a 45-story residential tower completion.' },
    { title: 'FIFA 2022 Precinct', cat: 'Infrastructure', img: 'https://picsum.photos/seed/stadium1/800/600', desc: 'Lead site operations for public works around major stadium.' },
    { title: 'West Bay Development', cat: 'High-rise', img: 'https://picsum.photos/seed/city1/800/600', desc: 'Structural reinforcements for luxury hospitality towers.' }
  ];

  return (
    <PageWrapper>
      <Container maxWidth="lg">
        <Typography variant="h2" gutterBottom>Selected Works</Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 8 }}>
          A showcase of excellence in GCC engineering.
        </Typography>

        <Grid container spacing={4}>
          {projs.map((p, i) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={i}>
              <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
                <Card sx={{ height: '100%', overflow: 'hidden', borderRadius: 4, display: 'flex', flexDirection: 'column' }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={p.img}
                    alt={p.title}
                    referrerPolicy="no-referrer"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="caption" color="secondary" sx={{ fontWeight: 800, textTransform: 'uppercase' }}>
                      {p.cat}
                    </Typography>
                    <Typography variant="h6" sx={{ mt: 1, mb: 1 }}>{p.title}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {p.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </PageWrapper>
  );
};

// --- Skills Page ---
export const Skills = () => (
  <PageWrapper>
    <Container maxWidth="md">
      <Typography variant="h2" gutterBottom>Expertise</Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 10 }}>
        Technical and leadership proficiencies developed through years of on-site delivery.
      </Typography>

      <Box sx={{ mb: 12 }}>
        <Typography variant="h4" sx={{ mb: 6 }}>Engineering & Site Skills</Typography>
        <Stack spacing={4}>
          {[
            { name: 'Site Supervision & Operations', lv: 98 },
            { name: 'Structural Reinforcement Understanding', lv: 92 },
            { name: 'Infrastructure Planning', lv: 90 },
            { name: 'HSE & Safety Compliance', lv: 96 }
          ].map((s, i) => (
            <Box key={i}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="body1" sx={{ fontWeight: 600 }}>{s.name}</Typography>
                <Typography variant="body2" color="secondary">{s.lv}%</Typography>
              </Box>
              <LinearProgress variant="determinate" value={s.lv} sx={{ height: 8, borderRadius: 10, bgcolor: '#eee' }} />
            </Box>
          ))}
        </Stack>
      </Box>

      <Box>
        <Typography variant="h4" sx={{ mb: 6 }}>Management & Soft Skills</Typography>
        <Grid container spacing={4}>
          {[
            { name: 'Team Leadership', icon: <Apartment /> },
            { name: 'Project Coordination', icon: <AccountTree /> },
            { name: 'Stakeholder Mgmt', icon: <LocationOn /> },
            { name: 'Quality Control', icon: <CheckCircle /> }
          ].map((s, i) => (
            <Grid size={{ xs: 6, md: 3 }} key={i}>
              <Box sx={{ p: 4, bgcolor: 'background.paper', borderRadius: 4, textAlign: 'center' }}>
                <Box sx={{ color: 'secondary.main', mb: 2 }}>{s.icon}</Box>
                <Typography variant="body2" sx={{ fontWeight: 700 }}>{s.name}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  </PageWrapper>
);

// --- Contact Page ---
export const Contact = () => (
  <PageWrapper>
    <Container maxWidth="lg">
      <Grid container spacing={10}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="h2" gutterBottom>Get in Touch</Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 6 }}>
            Open to discussing new opportunities, structural challenges, and large-scale infrastructure projects.
          </Typography>

          <Stack spacing={4}>
            <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
              <Avatar sx={{ bgcolor: 'secondary.main' }}><Email /></Avatar>
              <Box>
                <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 700, textTransform: 'uppercase' }}>Email</Typography>
                <Typography variant="body1">fasilkp.engineer@example.com</Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
              <Avatar sx={{ bgcolor: 'secondary.main' }}><Phone /></Avatar>
              <Box>
                <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 700, textTransform: 'uppercase' }}>Phone</Typography>
                <Typography variant="body1">+971 50 000 0000</Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
              <Avatar sx={{ bgcolor: 'secondary.main' }}><LinkedIn /></Avatar>
              <Box>
                <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 700, textTransform: 'uppercase' }}>LinkedIn</Typography>
                <Typography variant="body1">linkedin.com/in/fasilkp</Typography>
              </Box>
            </Box>
          </Stack>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Card sx={{ p: 4 }}>
            <Typography variant="h5" sx={{ mb: 4 }}>Send a Message</Typography>
            <Stack spacing={3}>
              <TextField fullWidth label="Full Name" placeholder="Your Name" variant="outlined" />
              <TextField fullWidth label="Email Address" placeholder="email@example.com" variant="outlined" />
              <TextField fullWidth label="Message" placeholder="How can I help you?" multiline rows={4} variant="outlined" />
              <Button variant="contained" size="large" fullWidth>Send Message</Button>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </Container>
  </PageWrapper>
);
