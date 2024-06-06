// Header.tsx
import React, { useState, useRef, useEffect } from "react";
import {
  HeaderContainer,
  HeaderItem,
  HeaderItemsContainer,
  MenuIconWrapper,
  PhoneNumberText,
  PhoneNumberWrapper,
  SearchIconWrapper,
  SearchInputWrapper,
  SearchInput,
  DropdownContainer,
  DropdownItem,
  HeaderItemWrapper,
  SearchDropdownContainer,
  MenuhDropdownContainer,
  MenuDropdownItem,
} from "./Header.styles";
import Image from "next/image";
import { HEADER_ITEMS, MENU_DROPDOWN_LINKS, SearchDropdown } from "@/constants";
import SearchIcon from "../../../public/assets/svg/SearchIcon";
import PhoneIcon from "../../../public/assets/svg/PhoneIcon";
import MenuIcon from "../../../public/assets/svg/MenuIcon";
import Link from "next/link";

const Header: React.FC<{ activeTab?: string }> = ({ activeTab }) => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredDropdown, setFilteredDropdown] = useState(SearchDropdown);
  const searchRef = useRef<HTMLDivElement>(null);
  // const sideMenuRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsSearchVisible(false);
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (value) {
      const filtered = SearchDropdown.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredDropdown(filtered);
    } else {
      setFilteredDropdown(SearchDropdown);
    }
  };

  return (
    <HeaderContainer>
      <Link href={"/"} scroll={false} passHref style={{ cursor: "pointer" }}>
        <Image
          alt="XTRABRICK"
          src={"/assets/images/Logo.png"}
          height={49}
          width={87}
        />
      </Link>

      <HeaderItemsContainer gap={"50px"}>
        {HEADER_ITEMS?.map((item) => (
          <HeaderItemWrapper key={item.name}>
            <Link href={item.link} passHref>
              <HeaderItem active={activeTab === item.name}>
                {item?.name}
              </HeaderItem>
            </Link>
            {item.dropdownItems && (
              <DropdownContainer>
                {item.dropdownItems.map((dropdownItem) => (
                  <Link
                    href={dropdownItem.link}
                    key={dropdownItem.name}
                    passHref
                    style={{ cursor: "pointer" }}
                  >
                    <DropdownItem>{dropdownItem.name}</DropdownItem>
                  </Link>
                ))}
              </DropdownContainer>
            )}
          </HeaderItemWrapper>
        ))}
      </HeaderItemsContainer>

      <HeaderItemsContainer ref={searchRef}>
        <SearchInputWrapper isSearchVisible={isSearchVisible}>
          {isSearchVisible && (
            <SearchInput
              placeholder="Search"
              value={searchTerm}
              onChange={handleSearchChange}
              autoFocus
            />
          )}
          <SearchIconWrapper
            onClick={() => {
              setIsSearchVisible(!isSearchVisible);
            }}
          >
            <SearchIcon />
          </SearchIconWrapper>
        </SearchInputWrapper>
        {isSearchVisible && (
          <SearchDropdownContainer isSearchVisible={isSearchVisible}>
            {filteredDropdown.map((item) => (
              <Link
                href={item.link}
                key={item.name}
                passHref
                style={{ cursor: "pointer" }}
              >
                <DropdownItem>{item.name}</DropdownItem>
              </Link>
            ))}
          </SearchDropdownContainer>
        )}
        <PhoneNumberWrapper
          onClick={() => {
            if (window && typeof window !== undefined) {
              window.open(`https://wa.me/9850004775`);
            }
          }}
        >
          <PhoneIcon className="phoneIcon" height={21} width={23} />
          <PhoneNumberText className="phoneText">9850004775</PhoneNumberText>
        </PhoneNumberWrapper>
        <MenuIconWrapper onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <MenuIcon />
          {isMenuOpen && (
            <MenuhDropdownContainer isSearchVisible={isMenuOpen}>
              {MENU_DROPDOWN_LINKS.map((item, index) => (
                <div key={index}>
                  <Link
                    href={item.link}
                    key={item.name}
                    passHref
                    style={{ cursor: "pointer" }}
                  >
                    <MenuDropdownItem>{item.name}</MenuDropdownItem>
                  </Link>
                  {item?.subLinks?.map((link) => {
                    return (
                      <Link
                        href={link.link}
                        key={link.name}
                        passHref
                        style={{ cursor: "pointer" }}
                      >
                        <MenuDropdownItem subLink>{link.name}</MenuDropdownItem>
                      </Link>
                    );
                  })}
                </div>
              ))}
            </MenuhDropdownContainer>
          )}
        </MenuIconWrapper>
      </HeaderItemsContainer>
    </HeaderContainer>
  );
};

export default Header;
