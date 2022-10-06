<template>
    <p>DemoSlots works !</p>
    
    <!-- Pour pouvoir, à un emplacement dans le template de notre composant, 
        injecter un HTML que l'on défini au niveau du parent, 
        il nous faut utiliser la balise slot -->

    <slot>
        <p>Valeur par défaut</p>
    </slot>

    <!-- Il est possible d'avoir plusieurs slots si l'on a besoin de plus de souplesse 
        au niveau de la généricité de notre composant. Pour ce faire, 
        il faut donner un nom à nos autres slots -->
    <slot name="blabla">
        <p>Valeur par défaut du slot blabla</p>
    </slot>
</template>