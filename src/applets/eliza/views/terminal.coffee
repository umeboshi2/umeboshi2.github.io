import { View as MnView } from 'backbone.marionette'
#import { hterm, lib } from 'hterm-umdjs'

import { Terminal } from 'xterm'
import * as fit from 'xterm/lib/addons/fit/fit'
#import "xterm/dist/xterm.css"
import './xterm.scss'
Terminal.applyAddon fit

import Worker from 'worker-loader!../worker'

worker = new Worker()

class MyTerminal extends Terminal
  prompt: ->
    @.write '\r\n->'
    return

makeTerm = ->
  term = new MyTerminal()
  currentInput = ''
  term.on 'key', (key, ev) ->
    printable = !ev.altKey && !ev.altGraphKey && !ev.ctrlKey && !ev.metaKey
    if ev.keyCode == 13
      term.write('\r\n')
      worker.postMessage
        content: currentInput
      currentInput = ''
    else if ev.keyCode == 8
      #console.log "backspace", term
      if currentInput.length
        term.write '\b \b'
        currentInput = currentInput.slice(0, -1)
    else if printable
      term.write key
      currentInput += key
  return term

class TerminalView extends MnView
  template: false
  className: 'my-xterm'
  ui:
    terminal: '.my-xterm'
  startTerminal: ->
    #@terminal.dispose()
    @terminal = makeTerm()
    #@terminal = myXterm
    @terminal.open @el
    @terminal.setOption 'fontSize', 14
    @terminal.setOption 'fontFamily', 'Mono'
    @terminal.resize(80, 15)
    #@terminal.resize(NaN, NaN)
    @terminal.fit()
    console.log "@terminal", @terminal
    worker.onmessage = (event) =>
      @terminal.write event.data.content
      @terminal.prompt()
    worker.postMessage
      content: 'getInitial'
    
  onBeforeDestroy: ->
    if @terminal
      @terminal.dispose()
      console.log "Terminal disposed."

export default TerminalView
