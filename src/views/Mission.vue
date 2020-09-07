<template>
  <div id="mission">
    <h1 class="ma-12">Our Mission</h1>
    <div class="content-container ma-6">
      <div class="d-flex flex-column justify-center mx-6">
        <h2 class="accent-text mb-4">
          Security should be the focus of every company
        </h2>
        <p>
          Companies have been selling our data for a while with no concern to
          our privacy. The intention of this site is to bring that information
          in a digestible form to the people.
        </p>
      </div>
      <img
        src="@/assets/images/presentation.webp"
        alt="person presenting some information"
      />
    </div>
    <div class="content-container ma-6">
      <img src="@/assets/images/working.webp" alt="person working on laptop" />
      <div class="d-flex flex-column justify-center mx-6">
        <h2 class="accent-text mb-4">
          Designed for the security industry in mind
        </h2>
        <p>
          We designed Privacy not included to aid people in getting information
          about the security of applications. We want to empower people with the
          most up to date information by allowing the security industry to
          publish articles for everybody to enjoy. If you are a beginner or a
          veteran this site if just for you.
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
#mission {
  .content-container {
    display: flex;
    justify-content: space-between;

    img {
      width: 50%;
    }

    div {
      width: 40%;
    }

    @media (max-width: $mobile-lg) {
      flex-direction: column;

      div {
        width: 90%;
      }

      img {
        margin: 0 auto;
        width: 100%;
      }
    }
  }

  .content-container:last-child {
    @media (max-width: $mobile-lg) {
      flex-direction: column-reverse;
    }
  }
}
</style>
