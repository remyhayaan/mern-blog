import React from 'react'

function Farmvisit() {
  return (
    <div>
     <section id='testimonials'>
  <h1 class="text-center text-3xl font-bold mb-8">Reviews</h1>
  <div class="testimonial-box-container flex flex-wrap justify-between space-x-4 space-y-4">
    <div class="testimonial-box w-full sm:w-1/2 lg:w-1/3 p-4 bg-white rounded shadow-md">
      <div class="box-top flex items-center justify-between">
        <div class="profile flex items-center">
          <div class="profile-img mr-4">
            <img src='https://flowbite.com/docs/images/carousel/carousel-1.svg' alt='profile' class="w-12 h-12 rounded-full"/>
          </div>
          <div class="name-user">
            <strong>rehemah</strong>
            <span class="block text-gray-500">@remmy</span>
          </div>
        </div>
        <div class="reviews">
          <Rating>
            <Rating.Star />
            <Rating.Star />
            <Rating.Star />
            <Rating.Star />
            <Rating.Star filled={false} />
          </Rating>
        </div>
      </div>
      <div class="comments mt-4">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptates sunt ad dolorum optio error adipisci dicta minima, libero dolor, aspernatur architecto perferendis id. Laudantium omnis dolor unde odio cum?</p>
      </div>
    </div>
    <div class="testimonial-box w-full sm:w-1/2 lg:w-1/3 p-4 bg-white rounded shadow-md">
      <div class="box-top flex items-center justify-between">
        <div class="profile flex items-center">
          <div class="profile-img mr-4">
            <img src='https://flowbite.com/docs/images/carousel/carousel-1.svg' alt='profile' class="w-12 h-12 rounded-full"/>
          </div>
          <div class="name-user">
            <strong>rehemah</strong>
            <span class="block text-gray-500">@remmy</span>
          </div>
        </div>
        <div class="reviews">
          <Rating>
            <Rating.Star />
            <Rating.Star />
            <Rating.Star />
            <Rating.Star />
            <Rating.Star filled={false} />
          </Rating>
        </div>
      </div>
      <div class="comments mt-4">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptates sunt ad dolorum optio error adipisci dicta minima, libero dolor, aspernatur architecto perferendis id. Laudantium omnis dolor unde odio cum?</p>
      </div>
    </div>
    <div class="testimonial-box w-full sm:w-1/2 lg:w-1/3 p-4 bg-white rounded shadow-md">
      <div class="box-top flex items-center justify-between">
        <div class="profile flex items-center">
          <div class="profile-img mr-4">
            <img src='https://flowbite.com/docs/images/carousel/carousel-1.svg' alt='profile' class="w-12 h-12 rounded-full"/>
          </div>
          <div class="name-user">
            <strong>rehemah</strong>
            <span class="block text-gray-500">@remmy</span>
          </div>
        </div>
        <div class="reviews">
          <Rating>
            <Rating.Star />
            <Rating.Star />
            <Rating.Star />
            <Rating.Star />
            <Rating.Star filled={false} />
          </Rating>
        </div>
      </div>
      <div class="comments mt-4">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptates sunt ad dolorum optio error adipisci dicta minima, libero dolor, aspernatur architecto perferendis id. Laudantium omnis dolor unde odio cum?</p>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Farmvisit
