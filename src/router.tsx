import { BrowserRouter, Routes, Route } from "react-router-dom"
import { lazy, Suspense } from "react"
import AppLayout from "./layout/AppLayout"

const IndexView = lazy(() => import('./views/IndexView'))
const ProductDetailsView = lazy(() => import('./views/ProductDetailsView'))
const FindUsView = lazy(() => import('./views/FindUsView'))
const ServicesView = lazy(() => import('./views/ServicesView'))
const AboutUsView = lazy(() => import('./views/AboutUsView'))

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route path="/" index element={
                        <Suspense fallback="loading...">
                            <IndexView />
                        </Suspense>}
                    />
                    <Route path="/product/:id" element={
                        <Suspense fallback="loading...">
                            <ProductDetailsView />
                        </Suspense>}
                    />
                    <Route path="/find-us" element={
                        <Suspense fallback="loading...">
                            <FindUsView />
                        </Suspense>}
                    />
                    <Route path="/services" element={
                        <Suspense fallback="loading...">
                            <ServicesView />
                        </Suspense>}
                    />
                    <Route path="/about" element={
                        <Suspense fallback="loading...">
                            <AboutUsView />
                        </Suspense>}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}