import React from 'react';
import './Icons.css';

export const CloseIcon = () => {
  return (
    <svg className="search-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
      <path d="M0 0h24v24H0z" fill="none"/>
    </svg>
  );
}

export const SearchIcon = () => {
  return (
    <svg className="close-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
      <path d="M0 0h24v24H0z" fill="none"/>
    </svg>
  );
}

export const LoadIcon = () => {
  return (
    <svg className="load-icon" viewBox="0 0 36 36" width="36px" height="36px" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.5,18C1.5,8.9,8.9,1.5,18,1.5S34.5,8.9,34.5,18H36c0-9.9-8.1-18-18-18S0,8.1,0,18c0,9.9,8.1,18,18,18v-1.5 C8.9,34.5,1.5,27.1,1.5,18z">
        <animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 18 18" to="360 18 18" dur="2s" repeatCount="indefinite" />
      </path>
    </svg>
  );
}