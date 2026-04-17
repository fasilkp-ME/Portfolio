import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Container, 
  Box, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemText,
  useScrollTrigger,
  Slide
} from '@mui/material';
import { Menu as MenuIcon, Engineering } from '@mui/icons-material';
import { useState, ReactElement } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Experience', path: '/experience' },
  { label: 'Projects', path: '/projects' },
  { label: 'Skills', path: '/skills' },
  { label: 'Contact', path: '/contact' }
];

function HideOnScroll({ children }: { children: ReactElement }) {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', p: 2 }}>
      <Typography variant="h6" sx={{ my: 2, fontWeight: 800 }}>
        Fasil <Box component="span" sx={{ color: 'secondary.main' }}>KP</Box>
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding component={Link} to={item.path}>
            <ListItemText 
              primary={item.label} 
              sx={{ 
                textAlign: 'center', 
                color: location.pathname === item.path ? 'secondary.main' : 'text.primary',
                '& .MuiTypography-root': { fontWeight: 600 }
              }} 
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <HideOnScroll>
        <AppBar position="sticky" color="inherit" elevation={location.pathname === '/' ? 0 : 1} sx={{ backdropFilter: 'blur(10px)', backgroundColor: 'rgba(255,255,255,0.8)' }}>
          <Container maxWidth="lg">
            <Toolbar disableGutters>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, flexGrow: 1 }}>
                <Engineering color="secondary" />
                <Typography
                  variant="h6"
                  noWrap
                  component={Link}
                  to="/"
                  sx={{
                    fontFamily: 'inherit',
                    fontWeight: 800,
                    letterSpacing: '.1rem',
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                >
                  Fasil KP
                </Typography>
              </Box>

              <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
                {navItems.map((item) => (
                  <Button
                    key={item.label}
                    component={Link}
                    to={item.path}
                    sx={{
                      color: location.pathname === item.path ? 'secondary.main' : 'text.primary',
                      fontWeight: 600,
                      px: 2,
                      '&:hover': { color: 'secondary.main', background: 'transparent' }
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>

              <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                <IconButton color="inherit" onClick={handleDrawerToggle}>
                  <MenuIcon />
                </IconButton>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export const Footer = () => (
  <Box sx={{ py: 6, borderTop: '1px solid #eee', textAlign: 'center', bgcolor: 'white' }}>
    <Container maxWidth="lg">
      <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>
        Fasil <Box component="span" sx={{ color: 'secondary.main' }}>KP</Box>
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ letterSpacing: 1 }}>
        Infrastructure Specialist • Senior Site Engineer • GCC Region
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mt: 3, opacity: 0.6 }}>
        © {new Date().getFullYear()} Fasil KP. All rights reserved. Built with Professional Excellence.
      </Typography>
    </Container>
  </Box>
);
