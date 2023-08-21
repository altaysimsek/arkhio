import React from 'react';

const ItemCard = (props) => {
  return (
    <div className='item-card-container'>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img src="https://placehold.co/600x400" className='w-full' alt="" />

        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-center">{props.name}</div>
          <p className="text-gray-700 text-base text-center">
            {props.desc}
          </p>
        </div>

        <div className="px-6 pt-4 pb-2 text-center">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{props.tag1}</span>
          {props.tag2 && (
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{props.tag2}</span>
          )}
          {props.tag3 && (
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{props.tag3}</span>
          )}
        </div>
        <p className="text-center p-4">{props.date}</p>
      </div>
    </div>
  );
}

export default ItemCard;
