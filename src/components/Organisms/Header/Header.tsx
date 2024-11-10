import React, { useState } from 'react';
import { Slide, useScrollTrigger, AppBar, Toolbar } from '@material-ui/core';
import styles from './Header.module.scss';
import { HeaderLink } from '../../Molecules/HeaderLink/HeaderLink';

interface HeaderProps {
  children: React.ReactElement;
}

const HideOnScroll: React.FC<HeaderProps> = ({ children }) => {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

export const Header: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className={styles.header}>
      <HideOnScroll>
        <AppBar position="fixed" className={styles.appBar}>
          <Toolbar className={styles.toolbar}>
            <div className={styles.logo}></div>
            <div className={styles.navLinks}>
              <HeaderLink text="Home" href="/" />
              <HeaderLink text="About" href="/about" />
              <div
                className={styles.dropdownContainer}
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
              >
                <HeaderLink text="Services" href="/interior" /> {/* Updated */}
                <div
                  className={`${styles.arrow} ${showDropdown ? styles.arrowOpen : ''}`}
                />
                {showDropdown && (
                  <div className={styles.dropdown}>
                    <HeaderLink text="Interior Design" href="/interior" />
                    <HeaderLink text="Exterior Design" href="/exterior" />
                    <HeaderLink
                      text="Additions & Remodeling"
                      href="/additions"
                    />
                    <HeaderLink text="Roofing" href="/roofing" />
                  </div>
                )}
              </div>

              <HeaderLink text="Projects" href="/projects" />
              <HeaderLink text="Testimonials" href="/testimonials" />
              <HeaderLink text="Contact" href="/contact" />
            </div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </div>
  );
};
