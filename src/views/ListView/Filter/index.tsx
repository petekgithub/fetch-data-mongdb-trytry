import React from 'react'
import { Collapse } from 'antd';
const { Panel } = Collapse;



const Filter = () => {

  return (
    <div>
      <form>
      <label htmlFor="username">Name</label>
          <input
            name="name"
            type="text"
          />
      <label htmlFor="username">EIN</label>
          <input
            name="name"
            type="text"
          />
      <label htmlFor="username">Description</label>
          <input
            name="name"
            type="text"
          />
      <label htmlFor="username">Mission</label>
          <input
            name="name"
            type="text"
          />
      <label htmlFor="username">ZIP</label>
          <input
            name="name"
            type="text"
          />
      <label htmlFor="username">State</label>
          <input
            name="name"
            type="text"
          />
      <label htmlFor="username">City</label>
          <input
            name="name"
            type="text"
          />
      <label htmlFor="username">Street</label>
          <input
            name="name"
            type="text"
          />
      <label htmlFor="username">Amount</label>
          <input
            name="name"
            type="text"
          />
      <label htmlFor="username">Website</label>
          <input
            name="name"
            type="text"
          />
      <label htmlFor="username">Phone</label>
          <input
            name="name"
            type="text"
      />
      <button type="submit"> SEARCH </button>
      </form>
    </div>
  )
}

export default Filter;
