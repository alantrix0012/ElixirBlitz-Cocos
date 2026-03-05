System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Color, ByteBuffer, _crd;

  _export("ByteBuffer", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Color = _cc.Color;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ffae5ZI5SJAxKuDpLhXWiGS", "ByteBuffer", undefined);

      __checkObsolete__(['Color']);

      _export("ByteBuffer", ByteBuffer = class ByteBuffer {
        constructor(buffer, offset, length) {
          this.stringTable = void 0;
          this.version = 0;
          this.littleEndian = void 0;
          this._view = void 0;
          this._bytes = void 0;
          this._pos = void 0;
          this._length = void 0;
          offset = offset || 0;
          if (length == null || length == -1) length = buffer.byteLength - offset;
          this._bytes = new Uint8Array(buffer, offset, length);
          this._view = new DataView(this._bytes.buffer, offset, length);
          this._pos = 0;
          this._length = length;
        }

        get data() {
          return this._bytes;
        }

        get position() {
          return this._pos;
        }

        set position(value) {
          if (value > this._length) throw new Error("Out of bounds");
          this._pos = value;
        }

        skip(count) {
          this._pos += count;
        }

        validate(forward) {
          if (this._pos + forward > this._length) throw new Error("Out of bounds");
        }

        readByte() {
          this.validate(1);
          return this._view.getUint8(this._pos++);
        }

        readBool() {
          return this.readByte() == 1;
        }

        readShort() {
          this.validate(2);

          var ret = this._view.getInt16(this._pos, this.littleEndian);

          this._pos += 2;
          return ret;
        }

        readUshort() {
          this.validate(2);

          var ret = this._view.getUint16(this._pos, this.littleEndian);

          this._pos += 2;
          return ret;
        }

        readInt() {
          this.validate(4);

          var ret = this._view.getInt32(this._pos, this.littleEndian);

          this._pos += 4;
          return ret;
        }

        readUint() {
          this.validate(4);

          var ret = this._view.getUint32(this._pos, this.littleEndian);

          this._pos += 4;
          return ret;
        }

        readFloat() {
          this.validate(4);

          var ret = this._view.getFloat32(this._pos, this.littleEndian);

          this._pos += 4;
          return ret;
        }

        readString(len) {
          if (len == undefined) len = this.readUshort();
          this.validate(len);
          var v = "",
              max = this._pos + len,
              c = 0,
              c2 = 0,
              c3 = 0,
              f = String.fromCharCode;
          var u = this._bytes,
              i = 0;
          var pos = this._pos;

          while (pos < max) {
            c = u[pos++];

            if (c < 0x80) {
              if (c != 0) {
                v += f(c);
              }
            } else if (c < 0xE0) {
              v += f((c & 0x3F) << 6 | u[pos++] & 0x7F);
            } else if (c < 0xF0) {
              c2 = u[pos++];
              v += f((c & 0x1F) << 12 | (c2 & 0x7F) << 6 | u[pos++] & 0x7F);
            } else {
              c2 = u[pos++];
              c3 = u[pos++];
              v += f((c & 0x0F) << 18 | (c2 & 0x7F) << 12 | c3 << 6 & 0x7F | u[pos++] & 0x7F);
            }

            i++;
          }

          this._pos += len;
          return v;
        }

        readS() {
          var index = this.readUshort();
          if (index == 65534) //null
            return null;else if (index == 65533) return "";else return this.stringTable[index];
        }

        readSArray(cnt) {
          var ret = new Array(cnt);

          for (var i = 0; i < cnt; i++) ret[i] = this.readS();

          return ret;
        }

        writeS(value) {
          var index = this.readUshort();
          if (index != 65534 && index != 65533) this.stringTable[index] = value;
        }

        readColor(hasAlpha) {
          var r = this.readByte();
          var g = this.readByte();
          var b = this.readByte();
          var a = this.readByte();
          return new Color(r, g, b, hasAlpha ? a : 255);
        }

        readChar() {
          var i = this.readUshort();
          return String.fromCharCode(i);
        }

        readBuffer() {
          var count = this.readUint();
          this.validate(count);
          var ba = new ByteBuffer(this._bytes.buffer, this._bytes.byteOffset + this._pos, count);
          ba.stringTable = this.stringTable;
          ba.version = this.version;
          this._pos += count;
          return ba;
        }

        seek(indexTablePos, blockIndex) {
          var tmp = this._pos;
          this._pos = indexTablePos;
          var segCount = this.readByte();

          if (blockIndex < segCount) {
            var useShort = this.readByte() == 1;
            var newPos;

            if (useShort) {
              this._pos += 2 * blockIndex;
              newPos = this.readUshort();
            } else {
              this._pos += 4 * blockIndex;
              newPos = this.readUint();
            }

            if (newPos > 0) {
              this._pos = indexTablePos + newPos;
              return true;
            } else {
              this._pos = tmp;
              return false;
            }
          } else {
            this._pos = tmp;
            return false;
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0e3ac3c7e2d2bc2200a45aaad9659ec185691de6.js.map