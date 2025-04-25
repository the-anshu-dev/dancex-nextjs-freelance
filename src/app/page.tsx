'use client'
import CategoryList from "@/components/CategoryList";
import CategorySection from "@/components/CategorySection";
import CoursesList from "@/components/CoursesList";
import FeaturedServices from "@/components/FeaturedServices";
import Gallery from "@/components/Gallery";
import HeadingPrimary from "@/components/HeadingPrimary";
import Search from "@/components/Search";
import ServicesList from "@/components/ServicesList";
import {
  categories,
  categoryList,
  courses,
  galleryImages,
  services,
} from "@/lib/server";

export default function Home() {
  return (
    <main>
      <Search />
      <div className="px-5">
      <CategoryList categories={categories} />
      <CoursesList courses={courses} />
      <HeadingPrimary secondary="dancex" primary="Standout DanceX Picks">
        <Gallery items={galleryImages} />
      </HeadingPrimary>
      </div>
      <HeadingPrimary secondary="might link" primary="Services You Might Link">
        <ServicesList services={services} />
      </HeadingPrimary>
      <div className="px-5">
      <HeadingPrimary secondary="featured" primary="Featured Services">
        <FeaturedServices services={courses.slice(0, 4)} />
      </HeadingPrimary>
      <HeadingPrimary secondary="categories" primary="Browse Categories">
        <CategorySection categories={categoryList} />
      </HeadingPrimary>
      </div>
    </main>
  );
}
