//
//  Extensions.swift
//  KeyboardController
//
//  Created by Kiryl Ziusko on 10/06/2023.
//  Copyright © 2023 Facebook. All rights reserved.
//

import Foundation
import UIKit

public extension CGFloat {
  static func interpolate(inputRange: [CGFloat], outputRange: [CGFloat], currentValue: CGFloat) -> CGFloat {
    let inputMin = inputRange.min() ?? 0
    let inputMax = inputRange.max() ?? 1
    let outputMin = outputRange.min() ?? 0
    let outputMax = outputRange.max() ?? 1

    let normalizedValue = (currentValue - inputMin) / (inputMax - inputMin)
    let interpolatedValue = outputMin + (outputMax - outputMin) * normalizedValue

    return interpolatedValue
  }
}

public extension Date {
  static var currentTimeStamp: Int64 {
    return Int64(Date().timeIntervalSince1970 * 1000)
  }
}

public extension UIResponder {
  private weak static var _currentFirstResponder: UIResponder?

  static var current: UIResponder? {
    UIResponder._currentFirstResponder = nil
    UIApplication.shared.sendAction(#selector(findFirstResponder(sender:)), to: nil, from: nil, for: nil)
      print(UIResponder._currentFirstResponder)
    return UIResponder._currentFirstResponder
  }

  @objc internal func findFirstResponder(sender _: AnyObject) {
    print(self)
    UIResponder._currentFirstResponder = self
  }
}

public extension Optional where Wrapped == UIResponder {
  var reactViewTag: NSNumber {
    #if KEYBOARD_CONTROLLER_NEW_ARCH_ENABLED
      return ((self as? RCTUITextField)?.superview?.tag ?? -1) as NSNumber
    #else
      return (self as? RCTUITextField)?.superview?.reactTag ?? -1
    #endif
  }
}

extension UIView {
    @objc dynamic func customSetBounds(_ bounds: CGRect) {
        // Perform your observation logic here
        print("Bounds changed to: \(bounds)")
        
        // Call the original implementation using method swizzling
        customSetBounds(bounds)
    }
    
    static func swizzleSetBounds() {
        let originalSelector = #selector(setter: UIView.bounds)
        let swizzledSelector = #selector(customSetBounds(_:))
        
        guard let originalMethod = class_getInstanceMethod(self, originalSelector),
              let swizzledMethod = class_getInstanceMethod(self, swizzledSelector) else {
            return
        }
        
        method_exchangeImplementations(originalMethod, swizzledMethod)
    }
}
