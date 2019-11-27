<template lang="pug">
#app.flex.flex-column.vh-100.avenir
    //- #top.bb.b--gray.bg-washed-yellow.h3
    #middle.flex.flex-auto
        #sidebar.sidepanel.br.b--light-gray.overflow-auto.w3.w5-ns
            .b.i.backgroundtext
                | Hutong dumplings carlton, MSAC empire of the sun swanston the city loop dandenong, melb ball food bloggers pellegrini's the melbourne cup, moomba the bulldogs bourke st mall chaddie fed square, street art werribee wildlife ticket inspector.

                | Formula one grand prix the croft institute, the espy a macaron connoisseur world's most liveable city fairy penguins the rebels, the hawks collingwood ferals emerald peacock ticket inspector NGV culture fix, movida kath and kim bill clinton ate two bowls victoria street dodgies street art, werribee wildlife aami park rooftop cinema.

                | Chapel street dame edna, east brunswick club rooftop bars empire of the sun chopper read posh brighton, trams essendon bombers brown alley lions bar ac/dc, graffiti dandenong etihad stadium running the tan chaddie, bill clinton ate two bowls don dons trams.

                | Werribee wildlife food bloggers, middle-aged lycra clad cyclists vic market posh brighton kath and kim Rod Laver, warehouse chic chopper read yarra cold drip coffee aami park, the emerald peacock burlesque four seasons in one day street art hook turns, brunswick and brunswick st movida south melb dim sims.

                | Brunswick st hippy south of the river, melbourne cricket ground brown alley shane warne kylie minogue essendon bombers, rooftop bars NGV culture fix south melb dim sims temper trap the espy, geoffrey rush formula one grand prix neatly trimmed moustaches bourke st mall the crazy wing challenge, chaddie the corner hotel secret laneway bars.

                | Bourke st mall fed square, swanston kath and kim MSAC cold drip coffee laksa king, the emerald peacock ball the saints grammar vs scotch pellegrini's, purple emerald burlesque ticket inspector collins place melbourne central, werribee wildlife footy collingwood ferals.

                | Presets empire of the sun, world's most liveable city spiegeltent the storm spring racing carnival warehouse chic, richmond tigers cold drip coffee fed square NGV culture fix flemington racecourse, hipsters cate blanchette the crazy wing challenge the city loop ball, yarra chopper read melb.

                | Dandenong NGV culture fix, ball citylink moomba swanston purple emerald, spencer st station mamasita the storm don dons etihad stadium, running the tan laksa king rooftop bars temper trap presets, posh brighton south of the river brunswick st hippy.

                | Middle-aged lycra clad cyclists melbourne cricket ground, the saints cold drip coffee brunswick and brunswick st MSAC lions bar, the melbourne cup cumulus inc shane warne the city loop swanston, old melbourne gaol posh brighton north melbourne shinboners ac/dc rooftop cinema, fairy penguins south melb dim sims aami park.

                | Presets melb, chopper read movida aami park don dons running the tan, purple emerald ball richmond tigers swanston burlesque, the australian open vic market moomba mamasita warehouse chic, frankston bogans geoffrey rush spring racing carnival.
            //- #collapsebtn
            h1 Hipster Map of Melbourne
            .fronttext
                .witty
                    p
                        | How did the hipster burn her tongue?
                        br
                        | She drank her coffee before it was cool.
                    p
                        a(href="http://suggest.hipstermelbourne.org/") Got a suggestion?
            .credits
                p Mostly by <a href="https://stevebennett.me">Steve Bennett</a>. Full credits and source at <a href="https://github.com/stevage/hipster-melbourne">Github</a>.<br/>
                p As seen in <a href="http://www.theage.com.au/victoria/mapping-the-hip-haunts-of-the-fashionably-uncool-20140406-366tz.html"><i>The Age</i> </a>and heard on <a href="http://www.abc.net.au/local/audio/2014/03/19/3962737.htm?site=melbourne">Aunty</a>.

        #map-container.relative.flex-auto
            Map
            #overlay.absolute
                FeatureInfo
    //- #bottom.bt.b--light-gray.flex-none.h2
</template>

<script>
import Map from './components/Map.vue'
import FeatureInfo from './components/FeatureInfo.vue'

export default {
    name: 'app',
    components: {
      Map,
      FeatureInfo
    }
}

require('tachyons/css/tachyons.min.css');
</script>

<style>
html, body {
  height: 100vh;
  width: 100%;
  margin:0;
  padding:0;
}

</style>
