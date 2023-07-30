import React from 'react';
import { useLoading } from '../hooks/useLoading';
import './Loading.css'

export default function Loading() {
  const { isLoading } = useLoading();
  if (!isLoading) return;

  return (
    <div className="load_container">
      <div className="load_items">
        <img src="/loading.svg" alt="Loading!" />
        <h1>Loading...</h1>
      </div>
    </div>
  );
}