# The DocPad Configuration File

# It is simply a CoffeeScript Object which is parsed by CSON
docpadConfig = {

	# =================================
	# Template Data
	# These are variables that will be accessible via our templates
	# To access one of these within our templates, refer to the FAQ: https://github.com/bevry/docpad/wiki/FAQ

	templateData:

		# Specify some site properties
		site:
			# The production url of our website
			url: "http://www.felipefialho.com"

			# The default title of our website
			title: "Felipe Fialho - Desenvolvedor Front-End"

			# The default title of our website - English
			title_en: "Felipe Fialho - Front-End Developer"

			# The default author of our website
			author: "Luiz Felipe Tartarotti Fialho"

			# The default title of our website
			email: "luizfelipe.tf.13@gmail.com"

			# The website description (for SEO)
			description: """
				Site para Desenvolvedores Front-End, com dicas do mercado web, tutoriais e projetos na qual participei.
				"""

			# The website description (for SEO) - English
			description_en: """
				Personal website with focused in Web Development, Front-End Developers and personal projects.
				"""

			# The website's styles
			styles: [
				'/assets/css/style.css'
			]

 			# Scripts
			scripts: [
				'/assets/js/scripts.min.js'
			]

			# Write After
			writeAfter: (opts,next) ->

		# -----------------------------
		# Active sections on the website
		# to deactivate comment out with '#'
		# you can also change order here and it will reflect on page
		sections: [
		  'blog'
		  'projetos'
		  'portfolio'
		]
		sectionsEn: [
		  'projects'
		  'portfolio'
		]

		# Labels which you can translate to other languages
		labels:
		  blog: "Blog"
		  projetos: "Projetos"
		  portfolio: "Portfolio"

		labelsEn:
		  projects: "Projects"
		  portfolio: "Portfolio"

		# Blog posts
		posts: [
      name: 'Sobre trabalhar remoto'
      description: 'Ia escrever um texto técnico, mas como muitas pessoas tem curiosidade nesse sentido, achei que seria legal abordar esse tema.'
      date: '10/06/2015'
      year: '2015'
      path: 'sobre-trabalhar-remoto'
    ,
      name: 'Meu dia a dia como desenvolvedor Front-End'
      description: 'Enfim o primeiro post de 2015. Vou contar um pouco sobre meu dia a dia como desenvolvedor Front-End, equipamentos, aplicativos, workflow...'
      date: '20/01/2015'
      year: '2015'
      path: 'meu-dia-a-dia-como-dev-frontend'
    ,
      name: 'Falando em organização... CSS'
      description: 'Dando continuidade a série sobre minha organização e fluxo de trabalho atual, vou contar um pouco sobre como tenho trabalhado o CSS.'
      date: '13/11/2014'
      year: '2014'
      path: 'falando-em-organizacao-css'
    ,
      name: 'Falando em organização... - Parte I'
      description: '"O Universo, é um lugar desconcertantemente grande, um fato que, para continuar levando uma vida tranquila, a maioria das pessoas tende a ignorar."'
      date: '15/10/2014'
      year: '2014'
      path: 'falando-em-organizacao-parte-1'
    ,
      name: 'Estamos realmente interessados em formar bons profissionais?'
      description: 'Esse texto não é técnico, e também não é direcionado apenas para Desenvolvedores Front-End, é um desabafo de quem também teve dificuldades para iniciar a carreira.'
      date: '25/08/2014'
      year: '2014'
      path: 'estamos-realmente-interessados-em-formar-bons-profissionais'
    ,
      name: 'E 5 anos atrás eu me tornava o menino do HTML...'
      description: 'Parece que foi ontem, mas faz 5 anos que oficialmente escrevi a primeira linha de código e dava meus primeiros passos em uma profissão que se quer existia.. ou existia?'
      date: '21/07/2014'
      year: '2014'
      path: '5-anos-atras-eu-me-tornava-o-menino-do-html'
    ,
      name: 'Sobre Data Atributes e Javascript'
      description: 'Nos últimos projetos comecei a testar o uso do [data-*] do HTML5 como seletor no Javascript. Agora vou listar algumas coisas que observei com essa prática.'
      date: '08/07/2014'
      year: '2014'
      path: 'sobre-data-atributes-e-javascript'
    ,
      name: 'Não use Placeholder no lugar da Label'
      description: 'O placeholder ajuda muito com informações complementares do campo de formulário, mas não deveria ser utilizado para substituir o label.'
      date: '02/06/2014'
      year: '2014'
      path: 'nao-use-placeholder-no-lugar-da-label'
    ,
		  name: 'É possível utilizar componentes desenvolvidos apenas com CSS?'
		  description: 'Após o lançamento do Pure CSS Components, escrevo as minhas impressões sobre a possibilidade de usar componentes desenvolvidos apenas com CSS.'
		  date: '22/04/2014'
		  year: '2014'
		  path: 'e-possivel-utilizar-componentes-desenvolvidos-apenas-com-css'
		,
		  name: 'CSS Modular com Mobile First'
		  description: 'Mobile First vai muito além de código, é um pensamento que precisa existir desde o ínicio do projeto. mas nesse artigo vou abordar apenas codificação e maneiras de deixar o workflow mais agradavel.'
		  date: '10/03/2014'
		  year: '2014'
		  path: 'css-modular-com-mobile-first'
		,
		  name: 'Utilizando o Bootstrap de forma consistente'
		  description: 'Parte do sucesso do Bootstrap está ligado a facilidade de uso, responsividade e soluções interessantes prontas para usar. Mas será que podemos aperfeiçoar essa utilização?'
		  date: '09/01/2014'
		  year: '2014'
		  path: 'utilizando-o-bootstrap-de-forma-consistente'
		,
		  name: 'Retrospectiva 2013'
		  description: 'Último dia de trabalho no ano, e é o momento ideal para analisar o que foi feito, reforçar as bases e se preparar para ter um 2014 ainda mais produtivo.'
		  date: '17/12/2013'
		  year: '2013'
		  path: 'retrospectiva-2013'
		,
		  name: 'Usando height com CSS Transitions'
		  description: 'Me deparei com um problema que alguns de vocês já devem ter passado, e posto aqui a resolução dele: A limitação do uso de "height: auto" em CSS Transitions.'
		  date: '18/11/2013'
		  year: '2013'
		  path: 'usando-height-com-css-transitions'
		,
		  name: 'Tutorial - Tabela Responsiva'
		  description: 'Em layouts responsivos, um dos componentes que sempre me incomodava eram as tabelas. Acredito que isso também ocorra com outros desenvolvedores...'
		  date: '14/10/2013'
		  year: '2013'
		  path: 'tutorial-tabela-responsiva'
		,
		  name: 'Tutorial - Botão de Progresso'
		  description: 'Vou mostrar mais um tutorial simples... o desenvolvimento de um botão de progresso, que pode fornecer um feedback importante para o usuário.'
		  date: '02/10/2013'
		  year: '2013'
		  path: 'tutorial-botao-de-progresso'
		,
		  name: 'Tutorial - Caixa de compartilhar em Puro CSS'
		  description: 'Nunca escrevi um tutorial em CSS por aqui, e começo mostrando como desenvolvi uma caixa de compartilhamento que pode ser bastante útil.'
		  date: '17/09/2013'
		  year: '2013'
		  path: 'tutorial-caixa-de-compartilhar-em-puro-css'
		,
		  name: 'Um conto sobre componentização e quebra de paradigmas'
		  description: 'Melhorar processos é parte essencial do nosso trabalho, mas em algum momento percebemos que só melhorar pode não ser o suficiente, as vezes é preciso quebrar paradigmas.'
		  date: '29/07/2013'
		  year: '2013'
		  path: 'um-conto-sobre-componentizacao-e-quebra-de-paradigmas'
		,
		  name: 'Sobre organização de componentes com pré-processadores'
		  description: 'No último post dei uma passada pelo Grunt e mostrei como ele pode ajudar a otimizar suas tarefas. Se você usa pré-processadores a organização dos componentes é essencial.'
		  date: '18/06/2013'
		  year: '2013'
		  path: 'sobre-organizacao-de-componentes-com-pre-processadores'
		,
		  name: 'Otimize suas tarefas com o Grunt!'
		  description: 'Pense nas atividades que você faz (ou deveria fazer) no momento que vai colocar o projeto em produção. Provavelmente você minifica e concatena o CSS e o javascript. Talvez também minifique o HTML e otimiza as imagens...'
		  date: '04/06/2013'
		  year: '2013'
		  path: 'grunt-voce-deveria-estar-usando'
		,
		  name: 'Primeiros passos com o Docpad'
		  description: 'No último post dei uma breve explicação sobre geradores estáticos. Algumas pessoas me pediram para fazer um tutorial básico do Docpad.'
		  date: '21/05/2013'
		  year: '2013'
		  path: 'primeiros-passos-com-o-docpad'
		,
		  name: 'Geradores estáticos - Breve explicação'
		  description: 'Quando escutamos falar em geradores estáticos pela primeira vez normalmente não compreendemos qual vantagem eles poderiam ter em relação a sistemas como o Wordpress.'
		  date: '06/05/2013'
		  year: '2013'
		  path: 'geradores-estaticos-breve-explicacao'
		,
		  name: 'O que um bom desenvolvedor Front-End precisa saber?'
		  description: 'Não tive formação como programador, sempre fui focado no HTML e CSS, apesar de claro, saber fazer integração e trabalhar no ambiente Back-End, além de me virar com JQuery.'
		  date: '29/04/2013'
		  year: '2013'
		  path: 'o-que-um-bom-desenvolvedor-front-end-precisa-saber'
		]

		# Projetos list
		projetos: [
		  # Pure CSS Components
		  name: "CSS Components"
		  thumb: "/assets/img/projetos/css-components.jpg"
		  participation: "Repositório de components usando apenas CSS, sem Javascript"
		  participationEn: "A repository of components development in CSS only, no Javascript."
		  demo: "http://www.felipefialho.com/css-components/",
		  link: "https://github.com/LFeh/css-components/"
		,
		  # CheSS.js
		  name: "CheSS.js"
		  thumb: "/assets/img/projetos/chess.jpg"
		  participation: "Moderno jogo de Xadrez desenvolvido com HTML, CSS e Javascript."
		  participationEn: "A modern and light chess game developed with HTML, CSS and Javascript."
		  demo: "http://chessjs.trendi.com.br/chess",
		  link: "https://github.com/chessjs/chess"
		, 
		  # A Clockwork Orange
		  name: "A Clockwork Orange"
		  thumb: "/assets/img/projetos/clockwork-orange.jpg"
		  participation: "Pure CSS homenageando o filme Laranja Mecânica."
		  participationEn: "My tribute in Pure CSS to this great movie."
		  demo: "http://codepen.io/LFeh/details/kjlnJ"
		, 
		  # Piano Keyboard
		  name: "Piano Keyboard"
		  thumb: "/assets/img/projetos/piano-keyboard.jpg"
		  participation: "Piano usando CSS, HTML e Javascript"
		  participationEn: "Piano Keyboard developed in HTML, CSS and Javascript"
		  demo: "http://www.felipefialho.com/piano/"
		,
		  # Table Responsive
		  name: "Table Responsive - Action"
		  thumb: "/assets/img/projetos/table-action.jpg"
		  participation: "Exemplo de 'Tabela Responsiva' para modelo com ações."
		  participationEn: "Other example of 'Table Responsive'. This example, is indicated for tables that require actions."
		  demo: "http://codepen.io/LFeh/details/beEoG"
		,
		  # Table Action
		  name: "Table Responsive"
		  thumb: "/assets/img/projetos/table-responsive.jpg"
		  participation: "Exemplo de 'Tabela Responsiva'"
		  participationEn: "Example of 'Table Responsive' for better adjust in small sizes."
		  demo: "http://codepen.io/LFeh/details/hsreD"
		, 
		  # Grunt Boilerplate
		  name: "Grunt Boilerplate"
		  thumb: "/assets/img/projetos/grunt-base.jpg"
		  participation: "Projeto com configurações básica para rodar o Grunt."
		  participationEn: "My Grunt Boilerplate"
		  link: "https://github.com/LFeh/grunt-boilerplate"
		,
		  # Cartman
		  name: "Pure CSS3 - Eric Cartman"
		  thumb: "/assets/img/projetos/cartman-css3.jpg"
		  participation: "Protótipo de Eric Cartman totalmente desenvolvido em CSS3. Fiz para estudos, mas curti o resultado final."
		  participationEn: "Eric Cartman in Pure CSS3 (with animation)."
		  demo: "http://codepen.io/LFeh/details/qzDCJ"
		,
		  # Website
		  name: "LFeh Website"
		  thumb: "/assets/img/projetos/blog.jpg"
		  participation: "O site que está navegando nesse instante :p. Código aberto no Github."
		  participationEn: "This Website."
		  link: "https://github.com/LFeh/Website"
		]

		# Portfolio list
		portfolio: [
      # Civil War
      name: "Civil War - 150th Anniversary"
      idName: "civilwar"
      thumb: "/assets/img/portfolio/civilwar-thumb.jpg" 
      participation: "Desenvolvimento do HTML (Jade), CSS (LESS) e Javascript."
      participationEn: "Development of HTML (Jade), CSS (LESS) and Javascript."
      link: "http://civilwar.oupexplore.com/"
    ,
      # AASC
      name: "African American Studies Center"
      idName: "aasc"
      thumb: "/assets/img/portfolio/aasc-thumb.jpg" 
      participation: "Desenvolvimento do HTML (Jade), CSS (LESS) e Javascript (AngularJS)."
      participationEn: "Development of HTML (Jade), CSS (LESS) and Javascript (AngularJS)."
      link: "http://aasc.oupexplore.com/"
    ,
      # OBO
      name: "Oxford Bibliographies"
      idName: "obo"
      thumb: "/assets/img/portfolio/obo-thumb.jpg" 
      participation: "Desenvolvimento do HTML (Jade), CSS (LESS) e Javascript."
      participationEn: "Development of HTML (Jade), CSS (LESS) and Javascript."
      link: "http://oxbib-info.oupexplore.com/"
    ,
      # Filtro Structure
      name: "Filtro Structure - 2014"
      idName: "filtro-structure"
      thumb: "/assets/img/portfolio/filtro-structure-thumb.jpg" 
      participation: "Desenvolvimento do HTML (Jade), CSS (LESS) e Javascript."
      participationEn: "Development of HTML (Jade), CSS (LESS) and Javascript."
      link: "http://2014.filtro.us/"
    ,
      # Corporate Sales
      name: "Oxford - Corporate Sales"
      idName: "corporate-sales"
      thumb: "/assets/img/portfolio/site-corporate-sales-thumb.jpg" 
      participation: "Desenvolvimento do HTML (Jade), CSS (LESS) e Javascript (AngularJS)."
      participationEn: "Development of HTML (Jade), CSS (LESS) and Javascript (AngularJS)."
      link: "http://oupmediainfo.com/"
    ,
      # Ivanovic
      name: "Ivanovic LP"
      idName: "ivanovic"
      thumb: "/assets/img/portfolio/site-ivanovic-thumb.jpg" 
      participation: "Desenvolvimento do HTML, CSS (LESS) e Javascript."
      participationEn: "Development of HTML, CSS (LESS) and Javascript."
      link: "http://ivanovicfundsllc.com/"
    ,
      # Two Story Tents
      name: "Two Story Tents"
      idName: "ivanovic"
      thumb: "/assets/img/portfolio/site-tst-thumb.jpg" 
      participation: "Desenvolvimento do HTML, CSS (LESS) e Javascript."
      participationEn: "Development of HTML, CSS (LESS) and Javascript."
      link: "http://www.twostorytents.com/"
    ,
      # JPR 2015
      name: "JPR 2015"
      idName: "jpr-2015"
      thumb: "/assets/img/portfolio/site-jpr-2015-thumb.jpg" 
      participation: "Desenvolvimento do HTML, CSS (LESS) e Javascript."
      participationEn: "Development of HTML, CSS (LESS) and Javascript."
      link: "http://www.jpr2015.org.br/"
    ,
      # Trend-i
      name: "Trend-i"
      idName: "trendi"
      thumb: "/assets/img/portfolio/site-trendi-thumb.jpg"
      imgModal: "/assets/img/portfolio/site-trendi.jpg"
      participation: "Desenvolvimento do HTML, CSS (LESS) e Javascript."
      participationEn: "Development of HTML, CSS (LESS) and Javascript."
      link: "http://www.trendi.com.br/"
    , 
		  # JPR 2014
		  name: "JPR 2014"
		  idName: "jpr-2014"
		  thumb: "/assets/img/portfolio/site-jpr-2014-thumb.jpg"
		  imgModal: "/assets/img/portfolio/site-jpr-2014.jpg"
		  participation: "Desenvolvimento do HTML, CSS (LESS) e Javascript."
		  participationEn: "Development of HTML, CSS (LESS) and Javascript."
		  link: "http://www.spr.org.br/pt/jpr/2014/"
		,
		  # Recovery
		  name: "Recovery Brasil"
		  idName: "recovery"
		  thumb: "/assets/img/portfolio/site-recovery-brasil-thumb.jpg"
		  imgModal: "/assets/img/portfolio/site-recovery-brasil.jpg"
		  participation: "Desenvolvimento do HTML, CSS (LESS) e Javascript."
		  participationEn: "Development of HTML, CSS (LESS) and Javascript."
		  link: "http://www.recoverybrasil.com.br/"
		,
		  # Prime Jardim Europa
		  name: "Prime Jardim Europa"
		  idName: "prime-jardim"
		  thumb: "/assets/img/portfolio/site-norcon-rossi-thumb.jpg"
		  imgModal: "/assets/img/portfolio/site-prime-jardim.jpg"
		  participation: "Desenvolvimento do HTML, CSS e Javascript."
		  participationEn: "Development of HTML, CSS and Javascript."
		  link: "http://www.primejardimeuropa.com.br/"
    , 
      # BTG
      name: "BTG Pactual"
      idName: "btg"
      thumb: "/assets/img/portfolio/site-btg-thumb.jpg"
      imgModal: "/assets/img/portfolio/site-btg.jpg"
      participation: "Desenvolvimento do HTML, CSS e Javascript."
      participationEn: "Development of HTML, CSS and Javascript."
      link: "https://www.btgpactual.com/home/home.aspx" 
	  ]

		# -----------------------------
		# Helper Functions

		# Get the prepared site/document title
		# Often we would like to specify particular formatting to our page's title
		# we can apply that formatting here
		getPreparedTitle: ->
			# if we have a document title, then we should use that and suffix the site's title onto it
			if @document.title
				"#{@document.title} | #{@site.title}"
			# if our document does not have it's own title, then we should just use the site's title
			else
				@site.title

		getPreparedTitleEn: ->
				# if we have a document title, then we should use that and suffix the site's title onto it
				if @document.title_en
					"#{@document.title} | #{@site.title}"
				# if our document does not have it's own title, then we should just use the site's title
				else
					@site.title_en

		# Get the prepared site/document description
		getPreparedDescription: ->
			# if we have a document description, then we should use that, otherwise use the site's description
			@document.description or @site.description

		# Get the prepared site/document description
		getPreparedDescriptionEn: ->
			# if we have a document description, then we should use that, otherwise use the site's description
			@document.description_en or @site.description_en

		# Get the prepared relative file
		getRelativeFile: ->
			# if we have a relative file
			if @document.path
				"#{@document.path}"
			# if our relative file does not have
			else
				""

		# Get the prepared post layout
		getLayoutName: (post) ->
			post.layout.replace(/\..*/, '')

	# =================================
	# DocPad Events

	# Here we can define handlers for events that DocPad fires
	# You can find a full listing of events on the DocPad Wiki
	events:

		# Server Extend
		# Used to add our own custom routes to the server before the docpad routes are added
		serverExtend: (opts) ->
			# Extract the server from the options
			{server} = opts
			docpad = @docpad

			# As we are now running in an event,
			# ensure we are using the latest copy of the docpad configuraiton
			# and fetch our urls from it
			latestConfig = docpad.getConfig()
			oldUrls = latestConfig.templateData.site.oldUrls or []
			newUrl = latestConfig.templateData.site.url

			# Redirect any requests accessing one of our sites oldUrls to the new site url
			server.use (req,res,next) ->
				if req.headers.host in oldUrls
					res.redirect(newUrl+req.url, 301)
				else
					next()

		# Write
		writeAfter: (opts,next) ->
			# Prepare
			balUtil = require('bal-util')
			docpad = @docpad
			config = docpad.getConfig()
			sitemap = []
			sitemapPath = config.outPath+'/sitemap.txt'
			siteUrl = config.templateData.site.url

			# Get all the html files
			docpad.getCollection('html').forEach (document) ->
				if document.get('sitemap') isnt false and document.get('write') isnt false and document.get('ignored') isnt true and document.get('body')
					sitemap.push siteUrl+document.get('url')

			# Write the sitemap file
			balUtil.writeFile(sitemapPath, sitemap.sort().join('\n'), next)
}

# Export our DocPad Configuration
module.exports = docpadConfig
