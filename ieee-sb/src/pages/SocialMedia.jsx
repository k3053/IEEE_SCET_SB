import React from 'react';

const SocialMedia = () => {
  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold">Follow us on Social Media</h1>
      <p className="mt-4">Connect with us on various platforms:</p>
      <ul className="list-disc ml-10 mt-4">
        <li>Facebook</li>
        <li>Instagram</li>
        <li>LinkedIn</li>
        {/* Add links to actual social media pages */}
      </ul>
    </div>
  );
};

export default SocialMedia;
