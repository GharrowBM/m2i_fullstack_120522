<template>
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
        <div class="container-fluid">
            <router-link class="navbar-brand" to="/">JdR Beyond</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarJdrBeyond"
                aria-controls="navbarJdrBeyond" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarJdrBeyond">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link" aria-current="page" to="/">Accueil</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/characters">Personnages</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/campaigns">Campagnes</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>